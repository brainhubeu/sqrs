[@brainhubeu/sqrs](../README.md) › ["commands/CommandValidatorProvider"](_commands_commandvalidatorprovider_.md)

# Module: "commands/CommandValidatorProvider"

## Index

### Interfaces

* [CommandValidatorProvider](../interfaces/_commands_commandvalidatorprovider_.commandvalidatorprovider.md)

### Variables

* [commandValidatorProviderId](_commands_commandvalidatorprovider_.md#const-commandvalidatorproviderid)

### Functions

* [containerCommandValidatorProviderFactory](_commands_commandvalidatorprovider_.md#containercommandvalidatorproviderfactory)

## Variables

### `Const` commandValidatorProviderId

• **commandValidatorProviderId**: *symbol & [BoundType](../interfaces/_di_dependencies_.boundtype.md)‹[CommandValidatorProvider](../interfaces/_commands_commandvalidatorprovider_.commandvalidatorprovider.md)›* = depId<CommandValidatorProvider>('CommandValidatorProvider')

*Defined in [commands/CommandValidatorProvider.ts:11](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/commands/CommandValidatorProvider.ts#L11)*

DependencyIdentifier of CommandValidatorProvider

## Functions

###  containerCommandValidatorProviderFactory

▸ **containerCommandValidatorProviderFactory**(`container`: [Container](../interfaces/_di_container_.container.md)): *[CommandValidatorProvider](../interfaces/_commands_commandvalidatorprovider_.commandvalidatorprovider.md)*

*Defined in [commands/CommandValidatorProvider.ts:29](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/commands/CommandValidatorProvider.ts#L29)*

Creates a function that resolves command validator from the container for a given command by it's type

**Parameters:**

Name | Type |
------ | ------ |
`container` | [Container](../interfaces/_di_container_.container.md) |

**Returns:** *[CommandValidatorProvider](../interfaces/_commands_commandvalidatorprovider_.commandvalidatorprovider.md)*
