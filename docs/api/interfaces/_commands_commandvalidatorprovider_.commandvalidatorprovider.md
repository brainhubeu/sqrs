[@brainhubeu/sqrs](../README.md) › ["commands/CommandValidatorProvider"](../modules/_commands_commandvalidatorprovider_.md) › [CommandValidatorProvider](_commands_commandvalidatorprovider_.commandvalidatorprovider.md)

# Interface: CommandValidatorProvider

A function that resolves a command validator by the command type.

**`interface`** CommandValidatorProvider

## Hierarchy

* **CommandValidatorProvider**

## Callable

▸ <**T**>(`type`: T): *[CommandValidator](_commands_commandvalidator_.commandvalidator.md)‹[Command](sqrs.command.md)‹T›› | undefined*

*Defined in [commands/CommandValidatorProvider.ts:19](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/commands/CommandValidatorProvider.ts#L19)*

A function that resolves a command validator by the command type.

**`interface`** CommandValidatorProvider

**Type parameters:**

▪ **T**: *string*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | T | command type |

**Returns:** *[CommandValidator](_commands_commandvalidator_.commandvalidator.md)‹[Command](sqrs.command.md)‹T›› | undefined*
