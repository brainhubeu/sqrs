[@brainhubeu/sqrs](../README.md) › ["commands/CommandHandlerProvider"](_commands_commandhandlerprovider_.md)

# Module: "commands/CommandHandlerProvider"

## Index

### Interfaces

* [CommandHandlerProvider](../interfaces/_commands_commandhandlerprovider_.commandhandlerprovider.md)

### Variables

* [commandHandlerProviderId](_commands_commandhandlerprovider_.md#const-commandhandlerproviderid)

### Functions

* [containerCommandHandlerProviderFactory](_commands_commandhandlerprovider_.md#containercommandhandlerproviderfactory)

## Variables

### `Const` commandHandlerProviderId

• **commandHandlerProviderId**: *symbol & [BoundType](../interfaces/_di_dependencies_.boundtype.md)‹[CommandHandlerProvider](../interfaces/_commands_commandhandlerprovider_.commandhandlerprovider.md)›* = depId<CommandHandlerProvider>('CommandHandlerProvider')

*Defined in [commands/CommandHandlerProvider.ts:11](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/commands/CommandHandlerProvider.ts#L11)*

DependencyIdentifier of CommandHandlerProvider

## Functions

###  containerCommandHandlerProviderFactory

▸ **containerCommandHandlerProviderFactory**(`container`: [Container](../interfaces/_di_container_.container.md)): *[CommandHandlerProvider](../interfaces/_commands_commandhandlerprovider_.commandhandlerprovider.md)*

*Defined in [commands/CommandHandlerProvider.ts:29](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/commands/CommandHandlerProvider.ts#L29)*

Creates a function that resolves command handler from the container for a given command by it's type

**Parameters:**

Name | Type |
------ | ------ |
`container` | [Container](../interfaces/_di_container_.container.md) |

**Returns:** *[CommandHandlerProvider](../interfaces/_commands_commandhandlerprovider_.commandhandlerprovider.md)*
