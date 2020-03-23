[@brainhubeu/sqrs](../README.md) › ["commands/CommandValidator"](../modules/_commands_commandvalidator_.md) › [CommandValidator](_commands_commandvalidator_.commandvalidator.md)

# Interface: CommandValidator <**TCommand**>

Base interface that command validators implement

**`interface`** CommandValidator

## Type parameters

▪ **TCommand**: *[Command](sqrs.command.md)*

type of command that validator can validate

## Hierarchy

* **CommandValidator**

## Index

### Methods

* [validate](_commands_commandvalidator_.commandvalidator.md#validate)

## Methods

###  validate

▸ **validate**(`command`: TCommand): *[CommandValidationResult](_commands_commandvalidator_.commandvalidationresult.md) | Promise‹[CommandValidationResult](_commands_commandvalidator_.commandvalidationresult.md)›*

*Defined in [commands/CommandValidator.ts:54](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/commands/CommandValidator.ts#L54)*

Validates command

**`memberof`** CommandValidator

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`command` | TCommand | command to validate |

**Returns:** *[CommandValidationResult](_commands_commandvalidator_.commandvalidationresult.md) | Promise‹[CommandValidationResult](_commands_commandvalidator_.commandvalidationresult.md)›*
