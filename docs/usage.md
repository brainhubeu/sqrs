# Usage

# Table of Contents
1. [Commands](#1-commands)
2. [Queries](#2-queries)
3. [Events](#3-events)
4. [Dependency Injection](#4-dependency-injection)

# 1. Commands

## 1.1. Creating commands

Commands are objects describing intent to change system state.

To create a command you need to create an object that implements `Command` interface.

Example command created using a class:

```ts
class CreateNoteCommand implements Command {
  public type = 'CreateNoteCommand'

  constructor (public readonly text: string) {
  }
}
```

Commands can also be created using functions that return an object (in a Redux like manner):

```ts
interface CreateNoteCommand extends Command {
  text: string;
}

const createCreateNoteCommand = (text: string): CreateNoteCommand => ({
  type: 'CreateNoteCommand',
  text,
})
```

Each command definition is strictly tied to it's `type` field by which it can be identified and handled accordingly. Because of this the `Command` interface accepts a generic type parameter for the `type` field. In TypeScript enums can be used to achieve type safety when using commands.

```ts
enum CommandTypes {
  First = 'FirstCommand',
  Second = 'SecondCommand',
}

interface FirstCommand
  extends Command<CommandTypes.FirstCommand> {
  text: string;
}

interface SecondCommand
  extends Command<CommandTypes.SecondCommand> {
  text: string;
}

const firstCommand: FirstCommand = {
  /*
   * this will error as 'SecondCommand' is not
   * assignable to CommandTypes.FirstCommand
   * guaranteeing type safety
   */
  type: 'SecondCommand',
  text: 'hello',
}

```

## 1.2. Writing command handlers

Command handlers execute the logic behind a command. They are called when command is dispatched.

To create a command handler implement `CommandHandler` interface.

```ts
class CreateNoteCommandHandler extends CommandHandler<CreateNoteCommand> {
  handle (command: CreateNoteCommand) {
    // somehow handle the command
    // e.g. create an entity and save it to the database
  }
}
```

You can also use a factory function if you wish so:

```ts
const createCreateNoteCommandHandler = (): CommandHandler<CreateNoteCommand> => ({
  handle (command: CreateNoteCommand) {
    // handle the command
  }
})
```

## 1.3. Writing command validators

In a dynamic language like JavaScript you might want to validate the schema of commands before passing them to command handlers. To help with that you can use command validators which perform shallow validation of command, e.g. validate required fields, their type or values.

To create a command validator implement `CommandValidator` interface.

```ts
class CreateNoteCommandValidator extends CommandValidator<CreateNoteCommand> {
  validate (command: CreateNoteCommand) {
    // return validation result
  }
}
```

In most cases you'd like to pair this with JSON Schema validation library, e.g. [yup](https://www.npmjs.com/package/yup), [ajv](https://www.npmjs.com/package/ajv), [joi](https://www.npmjs.com/package/joi).

Below is an example of how command validators can be created with [yup](https://www.npmjs.com/package/yup):

```ts
const createCommandSchemaValidator = <T extends Command<string>>(
  schema: yup.ObjectSchemaDefinition<Omit<T, 'type'>>
): CommandValidator<T> => ({
  async validate (command: T): Promise<CommandValidationResult> {
    try {
      await yup.object(schema).validate(command, { abortEarly: false, strict: true });

      return {
        isValid: true
      };
    } catch (err) {
      if (err.name !== 'ValidationError') {
        throw err;
      }

      let validationError = err as yup.ValidationError;
      return {
        isValid: false,
        errors: validationError.errors
      };
    }
  }
});

export const createNoteCommandValidator = createCommandSchemaValidator<CreateNoteCommand>({
  id: yup.string().required(),
  text: yup.string().required().max(100)
});
```

## 1.4. Dispatching commands

In order for a command to be handled it needs to be dispatched to the command bus. 

The `CommandBus` interface represents a generic usage command bus. It also accepts a generic type argument that represents return value of command dispatching (not to be confused with command handling which doesn't have a return value).

You can write your own command bus or use a default one provided by the package, described later.

```ts
import { CommandBus } from '@brainhubeu/sqrs';

const command = createCreateNoteCommand('hello')

interface CreateNoteCommandResult {
  executed: boolean;
}

const commandBus: CommandBus<CreateNoteCommandResult> = // create the command bus

const result = await commandBus.dispatch(command) // will be of type CreateNoteCommandResult
```

`sqrs` package exports a `DefaultCommandBus` class that implements `CommandBus<CommandResult>` interface. `DefaultCommandBus` is suited for systems that don't rely on command handling on other processes (e.g. by storing them on queues).

When command is dispatched to the `DefaultCommandBus` class following occurs:

- An instance of `CommandHandler` for given command is resolved. When no `CommandHandler` could be found an exception is thrown.
- An instance of `CommandValidator` for given command is resolved. When no `CommandValidator` could be found execution continues.
- If `CommandValidator` was found the command is validated. If validation was not successfull execution finishes and returned object contains information that command was invalid with validation errors.
- Command is passed to command handler and the bus waits until it's handled. If command handler threw an exception the returned object contains information that execution was not successfull, otherwise the returned object indicates that execution was successfull.

`DefaultCommandBus` requires two constructor arguments:

- commandHandlerProvider
- commandValidatorProvider

both are functions that when called with command type return either `CommandHandler` or a `CommandValidator`. Description on how they can be created can be found in [Dependency Injection](#dependency-injection) section.

# 2. Queries

## 2.1. Creating queries

Queries are objects describing intent to read state of the system.

To create a query implement `Query` interface. It takes two generic parameters first the type of queryName (by which query types are identified) and second describing expected return value of executing the query.

As with commands, queries can be created using classes or factory functions. Enums can be used to achieve type safety of queries that would have their types incorrectly inferred by TypeScript.

```ts
export QueryNames {
  GetNotes = 'GetNotes'
}

class GetNotesQuery extends Query<QueryNames.GetNotes, Note[]> {
  constructor(
    public readonly skip: number;
    public readonly take: number;
  ) {
  }
}
```

## 2.2. Writing query handlers

Query handler executes a query returning results.

To create a query handler implement `QueryHandler` interface. As with command handlers both classes and factory functions can be used.

```ts

class GetNotesQueryHandler implements QueryHandler<GetNotesQuery> {
  execute(query: GetNotesQuery): Promise<Note[]> {
    const { skip, take } = query;
    // get notes from somewhere
  }
}
```

## 2.3. Executing queries

In order for a query to be executed it needs to be executed on the query executor.

The `QueryExecutor` interface represents a generic usage query executor. The package also exports `DefaultQueryExecutor` which executes query using resolved query handler. Similar to the `DefaultCommandBus` it requires a function to resolve query handlers for given query.

```ts
import { QueryExecutor } from '@brainhubeu/sqrs';

const query = new GetNotesQuery(0, 25);

const queryExecutor: QueryExecutor = // create the query executor

const notes = await queryExecutor.execute(query)
```

# 3. Events

## 3.1. Creating events

Events describe that something has occurred in system, e.g. entity was created or changed, an action occurred. In most cases events are raised from command handlers.

To create an event implement `Event` interface. As with commands, queries can be created using classes or factory functions. Again enums can be used to achieve type safety.

```ts
enum EventTypes {
  NoteCreated = 'NoteCreated'
}

class NoteCreatedEvent implements Event<EventTypes.NoteCreated> {
  constructor (public readonly note: Note) {
  }
}
```

## 3.2. Writing event handlers

Event handlers respond to events. They are called when event is raised.

To create an event handler implement `EventHandler` interface. As with command handlers both classes and factory functions can be used.

```ts
class NoteCreatedEventHandler extends EventHandler<NoteCreatedEvent> {
  handle (event: NoteCreatedEvent) {
    // respond to the event
    // e.g. send an email, issue a command
  }
}
```

## 3.3. Raising events

In order for an event to be handled it needs to be raised to the command bus. 

The `EventBus` interface represents a generic usage event bus. The package also exports `DefaultEventBus` which handles event using resolved event handlers, awaiting their results and rejecting with error of the first failed event handler. Similar to the `DefaultQueryExecutor` it requires a function to resolve all event handlers for a given event.

```ts
import { EventBus } from '@brainhubeu/sqrs';

const event = new NoteCreatedEvent(note)

const eventBus: EventBus = // create the event bus

eventBus.raise(event)
```

# 4. Dependency injection

`sqrs` implementation of CQRS is heavily based on Inversion of Control principles. Rather than manually calling `CommandHandler` each `Command` is passed to the `CommandBus` which handles `Command` execution, and the same applies to queries and events. This allows achieving clear separation of conerns between each piece of the software.

`sqrs` works best with a dependency injection framework but no framework is not needed.

## 4.1. Dependency injection in `sqrs`

As previously discussed the default implementations of `CommandBus`, `EventBus`, and `QueryExecutor` require functions that tell them how to resolve the appropriate handlers.

`sqrs` package exports handler providers that use a dependency container.

```ts
import {
  Container,
  DefaultCommandBus,
  containerCommandHandlerProviderFactory,
  containerCommandValidatorProviderFactory,
  DefaultEventBus,
  containerEventHandlerProviderFactory,
  DefaultQueryExecutor,
  containerQueryHandlerProviderFactory,
} from '@brainhubeu/sqrs';

const container: Container = // create a container

const commandHandlerProvider = containerCommandHandlerProviderFactory(container);
const commandValidatorProvider = containerCommandValidatorProviderFactory(container);

const commandBus = new DefaultCommandBus(
  commandHandlerProvider,
  commandValidatorProvider
);

const eventHandlerProvider = containerEventHandlerProviderFactory(container);

const eventBus = new DefaultEventBus(
  eventHandlerProvider
);

const queryHandlerProvider = containerQueryHandlerProviderFactory(container);

const queryExecutor = new DefaultQueryExecutor(
  queryHandlerProvider
)
```

`Container` interface definition is as follows:

```ts
export interface Container {
  get<T> (identifier: DependencyIdentifier<T>): T | undefined;
  getAll<T> (identifier: DependencyIdentifier<T>): T[];
  isBound (identifier: DependencyIdentifier<any>): boolean;
}
```

`DependencyIdentifier<T>` is a helper type for a strongly typed `Symbol` representing the identifier of a type. This is needed because after TypeScript transpilation no type information is available to JavaScript runtime.

You can create dependency identifiers using `depId` function that returns a `Symbol` which can be used to identify the type. `depId` as first argument takes name of the identifier (e.g. interface), and an optional second argument indicating if created `Symbol` should be reused (by using `Symbol.for`).

```ts
interface Foo {
  bar (): void;
}

const fooId = depId<Foo>('Foo');

interface Bar {
  baz (): void;
}

const barId = depId<Bar>('Bar');

const barDependency: DependencyIdentifier<Bar> = fooId // will cause error that DependencyIdentifier<Foo> is not assignable to DependencyIdentifier<Bar>

depId<Foo>('Foo') === depId<Foo>('Foo') // returns false as those are two different symbols

depId<Foo>('Foo', true) === depId<Foo>('Foo', true) // returns true as Symbol was reused by using Symbol.for('Foo')
```

`sqrs` package also exports helper functions that allow creating reusable dependency identifiers for command handlers, command validators, event handlers, and query handlers.

```ts
import { commandHandlerId, commandValidatorId, eventHandlerId, queryHandlerId } from '@brainhubeu/sqrs'

const createNoteCommandHandlerId = commandHandlerId(
  CommandTypes.CreateNote
);
const createNoteCommandValidatorId = commandHandlerId(
  CommandTypes.CreateNote
);
const noteCreatedEventHandlerId = eventHandlerId(
  EventTypes.NoteCreated
);
const getNotesQueryHandlerId = queryHandlerId(
  QueryNames.GetNotes
);
```

If you wish to use container handler providers you must register handlers using those identifiers because all handlers are resolved using those identifiers, e.g.

```ts
container.bind(CreateNoteCommandHandler)
  .to(createNoteCommandHandlerId);
container.bind(CreateNoteCommandValidator)
  .to(createNoteCommandValidatorId);
container.bind(NoteCreatedEventHandler)
  .to(noteCreatedEventHandlerId);

commandHandlerProvider.get<CommandHandler>(CommandTypes.CreateNote) // will be instance of CreateNoteCommandHandler
```

## 4.2. Using InversifyJS

Being a powerfull framework InversifyJS allows granular control over injecting dependencies. You can inject new instances on each request, or reuse them if you wish. Furthermore, it allows you to inject different implementations depending on the place they are injected to, e.g. you could inject read only connection to database to queries, and write-capable to command handlers. 

If you're using [InversifyJS](https://www.npmjs.com/package/inversify) you can use [sqrs-inversify](/packages/sqrs-inversify/README.md) package which contains helpers for registering handlers and a container module with default implementations registered.

`Container` interface was based on InversifyJS allowing you to use without any wrappers.

```ts
import {
  commandBusId, CommandBus,
  eventBusId, EventBus,
  commandHandlerId, CommandHandler,
  createCommandHandlerProviderFactory,
} from '@brainhubeu/sqrs';
import { injectable, inject } from 'inversify';
import { noteRepositoryId, NoteRepository } from '../repositories/NoteRepository';

/* Command Handler */
@injectable()
class CreateNoteCommandHandler implements CommandHandler<CreateNote> {
  constructor (
    @inject(noteRepositoryId) private readonly noteRepository: NoteRepository,
    @inject(eventBusId) private readonly eventBus: EventBus,
  ) {
  }

  async handle (command: CreateNoteCommand) {
    const { text } = command;

    const note = new Note(text);

    await this.noteRepository.save(note);

    this.eventBus.raise(new NoteCreatedEvent(note));
  }
}

/* Registration */
const container = new Container();

// inject all other dependencies
// e.g. container.bind(noteRepositoryId).to(NoteRepository);
container.bind(commandHandlerId(CommandTypes.CreateNote))(CreateNoteCommandHandler);

const commandHandlerProvider = createCommandHandlerProviderFactory(container)

// command handler provider can now be used in the command bus
// calling commandHandlerProvider(CommandTypes.CreateNote) will resolve the handler 
```

## 4.3. Using other framework

If you're using some other framework you can just implement a wrapper that implements the `Container` interface.

An example with [BottleJS](https://github.com/young-steveo/bottlejs):
```ts
import { Container } from '@brainhubeu/sqrs';

const bottle: Bottle = new Bottle();

const container: Container = {
  get (symbol) {
    return bottle.container[symbol.toString()]
  },
  getAll (symbol) {
    return this.isBound(symbol) ? [bottle.container[symbol.toString()]] : [];
  },
  isBound (symbol) {
    return symbol.toString() in battle.container
  }
}
```

## 4.4. Creating your own providers 

If you don't want to create any dependency frameworks you can use simple dictionaries to resolve handlers. An example for resolving events:
```ts
const eventHandlers = {
  [EventTypes.NoteCreated]: new NoteCreatedEventHandler(),
}

const eventHandlerProvider = (type: string) => eventHandlers[event];

const eventBus = new EventBus(eventHandlerProvider);
```
