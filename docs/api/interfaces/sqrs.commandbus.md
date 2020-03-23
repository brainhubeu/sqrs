[@brainhubeu/sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [CommandBus](../interfaces/sqrs.commandbus.md)

# Interface: CommandBus

Interface for command bus that allows dispatching commands to appropriate handlers

*__interface__*: CommandBus

*__template__*: T - type of result returned after dispatching a command

## Type parameters
#### T 
## Hierarchy

**CommandBus**

## Implemented by

* [DefaultCommandBus](../classes/sqrs.defaultcommandbus.md)

## Index

### Methods

* [dispatch](sqrs.commandbus.md#dispatch)

---

## Methods

<a id="dispatch"></a>

###  dispatch

▸ **dispatch**(command: *[Command](sqrs.command.md)*): `Promise`<`T`>

*Defined in [commands/CommandBus.ts:26](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/CommandBus.ts#L26)*

Dispatches a command to appropriate command handler

*__memberof__*: CommandBus

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| command | [Command](sqrs.command.md) |  command to dispatch |

**Returns:** `Promise`<`T`>
result of dispatching

___

