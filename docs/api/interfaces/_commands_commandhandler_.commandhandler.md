[@brainhubeu/sqrs](../README.md) › ["commands/CommandHandler"](../modules/_commands_commandhandler_.md) › [CommandHandler](_commands_commandhandler_.commandhandler.md)

# Interface: CommandHandler <**TCommand**>

Base interface that command handlers implement

**`interface`** CommandHandler

## Type parameters

▪ **TCommand**: *[Command](sqrs.command.md)*

type of handled command

## Hierarchy

* **CommandHandler**

## Index

### Methods

* [handle](_commands_commandhandler_.commandhandler.md#handle)

## Methods

###  handle

▸ **handle**(`command`: TCommand): *void | Promise‹void›*

*Defined in [commands/CommandHandler.ts:31](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/commands/CommandHandler.ts#L31)*

Handles dispatched command

**`memberof`** CommandHandler

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | TCommand | command to handle |

**Returns:** *void | Promise‹void›*

- either nothing or a Promise that resolves when command is handled
