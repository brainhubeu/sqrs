[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [CommandHandlerProvider](../interfaces/sqrs.commandhandlerprovider.md)

# Interface: CommandHandlerProvider

A function that resolves a command handler by the command type.

*__interface__*: CommandHandlerProvider

## Hierarchy

**CommandHandlerProvider**

## Callable
▸ **__call**<`T`>(type: *`T`*): [CommandHandler](sqrs.commandhandler.md)<[Command](sqrs.command.md)<`T`>> \| `undefined`

*Defined in [commands/CommandHandlerProvider.ts:19](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/commands/CommandHandlerProvider.ts#L19)*

A function that resolves a command handler by the command type.

**Type parameters:**

#### T :  `string`
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `T` |  command type |

**Returns:** [CommandHandler](sqrs.commandhandler.md)<[Command](sqrs.command.md)<`T`>> \| `undefined`

## Index

---

