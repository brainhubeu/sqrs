# sqrs-inversify

This package provides helpers for using [sqrs](/packages/sqrs) with [InversifyJS](https://github.com/inversify/InversifyJS/) library.

## Usage

### SQRS Module

SQRS module registers all handler providers and default implementation of the buses.

```ts
import { Container } from 'inversify';
import { commandBusId, CommandBus } from '@brainhubeu/sqrs';
import { SQRSModule } from '@brainhubeu/sqrs-inversify';

const container = new Container();

container.load(SQRSModule);

// Will resolve to DefaultCommandBus
const commandBus = container.get<CommandBus>(commandBusId);
```

### ContainerBuilder

`ContainerBuilder` is a helper class that allows you to use InversifyJS without decorators in type safe manner.

Example usage of `ContainerBuilder`:
```ts
import {
  CommandHandler,
  eventBusId,
  EventBus,
  Dependencies,
} from '@brainhubeu/sqrs';
import { ContainerBuilder } from '@brainhubeu/sqrs-inversify';

// Assuming CreateNoteCommand, NoteRepository are declared
class CreateNoteCommandHandler implements CommandHandler<CreateNoteCommand> {
  static type = CommandTypes.CreateNote;

  static dependencies: Dependencies<typeof CreateNoteCommandHandler> = [
    eventBusId,
    noteRepositoryId,
  ]

  constructor (
    private readonly eventBus: EventBus,
    private readonly noteRepository: NoteRepository,
  ) {
  }

  async handle (command: CreateNoteCommand) {
    const note = new Note(command.text);

    await this.noteRepository.save(note);

    this.eventBus.raise(
      noteCreatedEvent(note)
    )
  }
}

const container = new Container();
const builder = new ContainerBuilder(container);

builder.registerCommandHandler(CreateNoteCommandHandler);

// Or using a module
const module = new ContainerModule(bind => {
  const builder = new ContainerBuilder(bind);

  builder.registerCommandHandler(CreateNoteCommandHandler);
})
```

It can be used with classes that have static field called `dependencies`, e.g.:

```ts
class Foo {
  static dependencies = [];
}
```

The type of dependencies should be `Dependencies` imported from `sqrs` module. This type reflects arguments of the constructor and requires correct order and number of identifiers of type `DependencyIdentifier<T>`, e.g.:

```ts
import {
  Dependencies,
  depId,
} from '@brainhubeu/sqrs';

type Foo = {};
type Baz = {};

const bazId = depId<Baz>('Baz')
const fooId = depId<Foo>('Foo')

class Bar {
  static dependencies: Dependencies<typeof Bar> = [
    fooId,
    bazId,
  ]

  constructor (
    foo: Foo,
    baz: Baz,
  ) {
  }
}

```

When you change the order of constructor arguments or their types, dependencies will cause an error guarding the types that are injected.

To register a type that has `dependencies` static field use `registerType` method.

```ts
import { Container } from 'inversify';
import { depId } from '@brainhubeu/sqrs';
import { ContainerBuilder } from '@brainhubeu/sqrs-inversify';

const container = new Container();
const builder = new ContainerBuilder(container);

const barId = depId<Bar>('Bar');

builder.registerType(barId, Bar);
```

`ContainerBuilder` exposes methods that allow for easy registration of:
- command handlers
- query handlers
- event handlers

To register a `CommandHandler` implementation add static fields `dependencies` and `type` to the class. The `type` field represents the type of command that this command handler handles, e.g.

```ts
class CreateNoteCommandHandler implements CommandHandler<CreateNoteCommand> {
  static type = CommandTypes.CreateNote;
  static dependencies: Dependencies<typeof CreateNoteCommandHandler> = [

  ];

  constructor () {
  }

  ...
}

/*
 * same as 
 * containerBuilder.registerType(
 *   commandHandlerId(CommandTypes.CreateNote),
 *   CreateNoteCommandHandler
 * )
 */
containerBuilder.registerCommandHandler(CreateNoteCommandHandler)
```

To register a `QueryHandler` implementation add static fields `dependencies` and `queryName` to the class. The `queryName` field represents the name of query that this handler handles, e.g.

```ts
class GetNotesQueryHandler implements QueryHandler<GetNotesQuery> {
  static queryName = QueryNames.GetNote;
  static dependencies: Dependencies<typeof GetNotesQueryHandler> = [

  ];

  constructor () {
  }

  ...
}

/*
 * same as 
 * containerBuilder.registerType(
 *   queryHandlerId(QueryNames.GetNotes),
 *   GetNotesQueryHandler
 * )
 */
containerBuilder.registerQueryHandler(GetNotesQueryHandler)
```


To register an `EventHandler` implementation add static fields `dependencies` and `type` to the class. The `type` field represents the type of event that this handler handles or an array of types that this handler handles, e.g.

```ts
class NoteCreatedEventHandler implements EventHandler<NoteCreatedEvent> {
  // Could also be [ EventTypes.NoteCreated ];
  static type = EventTypes.NoteCreated;
  static dependencies: Dependencies<typeof GetNotesQueryHandler> = [

  ];

  constructor () {
  }

  ...
}

/*
 * same as calling following for each event type
 * containerBuilder.registerType(
 *   eventHandlerId(eventType),
 *   NoteCreatedEventHandler
 * )
 */
containerBuilder.registerEventHandler(NoteCreatedEventHandler)
```