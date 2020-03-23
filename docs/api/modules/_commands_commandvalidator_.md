[@brainhubeu/sqrs](../README.md) › ["commands/CommandValidator"](_commands_commandvalidator_.md)

# Module: "commands/CommandValidator"

## Index

### Interfaces

* [CommandValidationResult](../interfaces/_commands_commandvalidator_.commandvalidationresult.md)
* [CommandValidator](../interfaces/_commands_commandvalidator_.commandvalidator.md)

### Functions

* [commandValidatorId](_commands_commandvalidator_.md#commandvalidatorid)

## Functions

###  commandValidatorId

▸ **commandValidatorId**(`type`: string): *[DependencyIdentifier](_di_dependencies_.md#dependencyidentifier)‹[CommandValidator](../interfaces/_commands_commandvalidator_.commandvalidator.md)›*

*Defined in [commands/CommandValidator.ts:13](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/commands/CommandValidator.ts#L13)*

Returns reusable DependencyIdentifier for given command type identifying command validator.

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *[DependencyIdentifier](_di_dependencies_.md#dependencyidentifier)‹[CommandValidator](../interfaces/_commands_commandvalidator_.commandvalidator.md)›*
