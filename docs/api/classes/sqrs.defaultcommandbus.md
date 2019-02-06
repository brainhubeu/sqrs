[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [DefaultCommandBus](../classes/sqrs.defaultcommandbus.md)

# Class: DefaultCommandBus

## Hierarchy

**DefaultCommandBus**

## Implements

* [CommandBus](../interfaces/sqrs.commandbus.md)<[CommandResult](../interfaces/sqrs.commandresult.md)>

## Index

### Constructors

* [constructor](sqrs.defaultcommandbus.md#constructor)

### Properties

* [dependencies](sqrs.defaultcommandbus.md#dependencies)

### Methods

* [dispatch](sqrs.defaultcommandbus.md#dispatch)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DefaultCommandBus**(commandHandlerProvider: *[CommandHandlerProvider](../interfaces/sqrs.commandhandlerprovider.md)*, commandValidatorProvider: *[CommandValidatorProvider](../interfaces/sqrs.commandvalidatorprovider.md)*): [DefaultCommandBus](sqrs.defaultcommandbus.md)

*Defined in [commands/DefaultCommandBus.ts:28](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/commands/DefaultCommandBus.ts#L28)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| commandHandlerProvider | [CommandHandlerProvider](../interfaces/sqrs.commandhandlerprovider.md) |
| commandValidatorProvider | [CommandValidatorProvider](../interfaces/sqrs.commandvalidatorprovider.md) |

**Returns:** [DefaultCommandBus](sqrs.defaultcommandbus.md)

___

## Properties

<a id="dependencies"></a>

### `<Static>` dependencies

**● dependencies**: *[Dependencies](../modules/sqrs.md#dependencies)<[DefaultCommandBus](sqrs.defaultcommandbus.md)>* =  [
    commandHandlerProviderId,
    commandValidatorProviderId
  ]

*Defined in [commands/DefaultCommandBus.ts:25](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/commands/DefaultCommandBus.ts#L25)*

___

## Methods

<a id="dispatch"></a>

###  dispatch

▸ **dispatch**(command: *[Command](../interfaces/sqrs.command.md)*): `Promise`<[CommandResult](../interfaces/sqrs.commandresult.md)>

*Implementation of [CommandBus](../interfaces/sqrs.commandbus.md).[dispatch](../interfaces/sqrs.commandbus.md#dispatch)*

*Defined in [commands/DefaultCommandBus.ts:43](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/commands/DefaultCommandBus.ts#L43)*

Dispatches a command in the same process and returns promise resolving with command result

*__memberof__*: DefaultCommandBus

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| command | [Command](../interfaces/sqrs.command.md) |  \- |

**Returns:** `Promise`<[CommandResult](../interfaces/sqrs.commandresult.md)>

___

