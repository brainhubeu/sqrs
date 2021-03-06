<br/>
<h1 align="center">
  sqrs
</h1>

<p align="center">
  A JavaScript library for implementing CQRS pattern.
</p>

<p align="center">
  <strong>
    <a href="https://brainhub.eu/contact/">Hire us</a>
  </strong>
</p>

<div align="center">

  [![Travis](https://api.travis-ci.org/brainhubeu/sqrs.svg?branch=master)](https://travis-ci.org/github/brainhubeu/sqrs)
  [![Last commit](https://img.shields.io/github/last-commit/brainhubeu/sqrs.svg)](https://github.com/brainhubeu/sqrs/commits/master)
  [![license](https://img.shields.io/npm/l/@brainhubeu/sqrs.svg)](https://github.com/brainhubeu/sqrs/blob/master/LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
  [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

  [![Downloads](https://img.shields.io/npm/dm/@brainhubeu/sqrs?color=blue)](https://www.npmjs.com/package/@brainhubeu/sqrs)
  [![Activity](https://img.shields.io/github/commit-activity/m/brainhubeu/sqrs.svg)](https://github.com/brainhubeu/sqrs/commits/master)
  [![Minified](https://img.shields.io/bundlephobia/min/@brainhubeu/sqrs?label=minified)](https://www.npmjs.com/package/@brainhubeu/sqrs)
  [![npm](https://img.shields.io/npm/v/@brainhubeu/sqrs.svg)](https://www.npmjs.com/package/@brainhubeu/sqrs)
  [![Contributors](https://img.shields.io/github/contributors/brainhubeu/sqrs?color=blue)](https://github.com/brainhubeu/sqrs/graphs/contributors)
</div>


Best used with TypeScript as it exposes interfaces for Commands, CommandHandlers, Queries, QueryHandlers and more.

When paired with a dependency injection framework it provides a fully-fledged inversion of control experience in JavaScript.

# Installation

To install sqrs run

`npm install @brainhubeu/sqrs` or `yarn add @brainhubeu/sqrs`

the packages comes with it's own TypeScript types.

ES2015 execution environment is required. For NodeJS that means at least Node 8 LTS.

# Getting started

## Introduction to CQRS

In short, CQRS is a pattern that differentiates between read operations and write operations. Write operations are achieved via commands that represent intent to change the system's state, and read operations are achieved via queries that read the system's state. The distinction between the to comes from the principle that asking a question shouldn't change the response.

You can read more about CQRS here:

- https://www.martinfowler.com/bliki/CQRS.html
- http://www.cqrs.nu

## Using the library

[See the longer guide for getting started](/docs/usage.md)

### Short version

Writing commands (note you don't have to use classes, you can also use object factories):
```ts
import { Command } from '@brainhubeu/sqrs';

export class AddNoteCommand implements Command {
  public type = 'add-note';
  public text: string;

  constructor (text: string) {
    this.text = text;
  }
}
```

Writing command handlers:
```ts
import { CommandHandler } from '@brainhubeu/sqrs';

class AddNoteCommandHandler implements CommandHandler {
  public handle (command: AddNoteCommand) {
    // do something with the command
  }
}
```

Writing queries:
```ts
import { Query } from '@brainhubeu/sqrs';

export class GetNotesQuery implements Query<string, Note[]> {
  public queryName = 'GetNotes';
}
```

Writing query handlers:
```ts
import { QueryHandler } from '@brainhubeu/sqrs';

export class GetNotesQueryHandler implements QueryHandler<GetNotesQuery> {
  execute (query: GetNotesQuery): Promise<Note[]> {
    // get notes from somewhere
  }
}
```

Final usage:
```ts
import { DefaultCommandBus, CommandBus, DefaultQueryExecutor, QueryExecutor } from '@brainhubeu/sqrs';

const commandBus: CommandBus = new DefaultCommandBus(
  // created somewhere else
  commandHandlerProvider,
  commandValidatorProvider
);
const queryExecutor: QueryExecutor = new DefaultQueryExecutor(
  // created somewhere else
  queryHandlerProvider
);

const addNoteCommand = new AddNoteCommand('hello');
await commandBus.dispatch(addNoteCommand);

const getNotesQuery = new GetNotesQuery();
const notes = await queryExecutor.execute(getNotesQuery);
```

# API reference

API reference generated from JSDoc comment can be found [here](/docs/api)

# Example project

Example project created using this library can be found [here](/packages/example-project) 
