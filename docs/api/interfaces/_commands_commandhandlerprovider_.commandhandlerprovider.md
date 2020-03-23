[@brainhubeu/sqrs](../README.md) › ["commands/CommandHandlerProvider"](../modules/_commands_commandhandlerprovider_.md) › [CommandHandlerProvider](_commands_commandhandlerprovider_.commandhandlerprovider.md)

# Interface: CommandHandlerProvider

A function that resolves a command handler by the command type.

**`interface`** CommandHandlerProvider

## Hierarchy

* **CommandHandlerProvider**

## Callable

▸ <**T**>(`type`: T): *[CommandHandler](_commands_commandhandler_.commandhandler.md)‹[Command](sqrs.command.md)‹T›› | undefined*

*Defined in [commands/CommandHandlerProvider.ts:19](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/commands/CommandHandlerProvider.ts#L19)*

A function that resolves a command handler by the command type.

**`interface`** CommandHandlerProvider

**Type parameters:**

▪ **T**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | T | command type |

**Returns:** *[CommandHandler](_commands_commandhandler_.commandhandler.md)‹[Command](sqrs.command.md)‹T›› | undefined*
