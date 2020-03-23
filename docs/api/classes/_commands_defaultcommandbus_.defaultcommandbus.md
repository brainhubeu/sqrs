[@brainhubeu/sqrs](../README.md) › ["commands/DefaultCommandBus"](../modules/_commands_defaultcommandbus_.md) › [DefaultCommandBus](_commands_defaultcommandbus_.defaultcommandbus.md)

# Class: DefaultCommandBus

## Hierarchy

* **DefaultCommandBus**

## Implements

* [CommandBus](../interfaces/_commands_commandbus_.commandbus.md)‹[CommandResult](../interfaces/_commands_defaultcommandbus_.commandresult.md)›

## Index

### Constructors

* [constructor](_commands_defaultcommandbus_.defaultcommandbus.md#constructor)

### Properties

* [dependencies](_commands_defaultcommandbus_.defaultcommandbus.md#static-dependencies)

### Methods

* [dispatch](_commands_defaultcommandbus_.defaultcommandbus.md#dispatch)

## Constructors

###  constructor

\+ **new DefaultCommandBus**(`commandHandlerProvider`: [CommandHandlerProvider](../interfaces/_commands_commandhandlerprovider_.commandhandlerprovider.md), `commandValidatorProvider`: [CommandValidatorProvider](../interfaces/_commands_commandvalidatorprovider_.commandvalidatorprovider.md)): *[DefaultCommandBus](_commands_defaultcommandbus_.defaultcommandbus.md)*

*Defined in [commands/DefaultCommandBus.ts:28](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/commands/DefaultCommandBus.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`commandHandlerProvider` | [CommandHandlerProvider](../interfaces/_commands_commandhandlerprovider_.commandhandlerprovider.md) |
`commandValidatorProvider` | [CommandValidatorProvider](../interfaces/_commands_commandvalidatorprovider_.commandvalidatorprovider.md) |

**Returns:** *[DefaultCommandBus](_commands_defaultcommandbus_.defaultcommandbus.md)*

## Properties

### `Static` dependencies

▪ **dependencies**: *[Dependencies](../modules/_di_dependencies_.md#dependencies)‹typeof DefaultCommandBus›* = [
    commandHandlerProviderId,
    commandValidatorProviderId
  ]

*Defined in [commands/DefaultCommandBus.ts:25](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/commands/DefaultCommandBus.ts#L25)*

## Methods

###  dispatch

▸ **dispatch**(`command`: [Command](../interfaces/sqrs.command.md)): *Promise‹[CommandResult](../interfaces/_commands_defaultcommandbus_.commandresult.md)›*

*Implementation of [CommandBus](../interfaces/_commands_commandbus_.commandbus.md)*

*Defined in [commands/DefaultCommandBus.ts:43](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/commands/DefaultCommandBus.ts#L43)*

Dispatches a command in the same process and returns promise resolving with command result

**`memberof`** DefaultCommandBus

**Parameters:**

Name | Type |
------ | ------ |
`command` | [Command](../interfaces/sqrs.command.md) |

**Returns:** *Promise‹[CommandResult](../interfaces/_commands_defaultcommandbus_.commandresult.md)›*
