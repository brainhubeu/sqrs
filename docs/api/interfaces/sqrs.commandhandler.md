[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [CommandHandler](../interfaces/sqrs.commandhandler.md)

# Interface: CommandHandler

Base interface that command handlers implement

*__interface__*: CommandHandler

*__template__*: TCommand - type of handled command

## Type parameters
#### TCommand :  [Command](sqrs.command.md)
## Hierarchy

**CommandHandler**

## Index

### Methods

* [handle](sqrs.commandhandler.md#handle)

---

## Methods

<a id="handle"></a>

###  handle

▸ **handle**(command: *`TCommand`*): `void` \| `Promise`<`void`>

*Defined in [commands/CommandHandler.ts:31](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/commands/CommandHandler.ts#L31)*

Handles dispatched command

*__memberof__*: CommandHandler

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| command | `TCommand` |  command to handle |

**Returns:** `void` \| `Promise`<`void`>
- either nothing or a Promise that resolves when command is handled

___

