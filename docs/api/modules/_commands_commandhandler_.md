[@brainhubeu/sqrs](../README.md) › ["commands/CommandHandler"](_commands_commandhandler_.md)

# Module: "commands/CommandHandler"

## Index

### Interfaces

* [CommandHandler](../interfaces/_commands_commandhandler_.commandhandler.md)

### Functions

* [commandHandlerId](_commands_commandhandler_.md#commandhandlerid)

## Functions

###  commandHandlerId

▸ **commandHandlerId**(`type`: string): *[DependencyIdentifier](_di_dependencies_.md#dependencyidentifier)‹[CommandHandler](../interfaces/_commands_commandhandler_.commandhandler.md)›*

*Defined in [commands/CommandHandler.ts:13](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/commands/CommandHandler.ts#L13)*

Returns reusable DependencyIdentifier for given command type identifying command handler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | command type |

**Returns:** *[DependencyIdentifier](_di_dependencies_.md#dependencyidentifier)‹[CommandHandler](../interfaces/_commands_commandhandler_.commandhandler.md)›*
