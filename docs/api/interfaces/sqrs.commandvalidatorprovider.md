[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [CommandValidatorProvider](../interfaces/sqrs.commandvalidatorprovider.md)

# Interface: CommandValidatorProvider

A function that resolves a command validator by the command type.

*__interface__*: CommandValidatorProvider

## Hierarchy

**CommandValidatorProvider**

## Callable
▸ **__call**<`T`>(type: *`T`*): [CommandValidator](sqrs.commandvalidator.md)<[Command](sqrs.command.md)<`T`>> \| `undefined`

*Defined in [commands/CommandValidatorProvider.ts:19](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/commands/CommandValidatorProvider.ts#L19)*

A function that resolves a command validator by the command type.

**Type parameters:**

#### T :  `string`
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `T` |  command type |

**Returns:** [CommandValidator](sqrs.commandvalidator.md)<[Command](sqrs.command.md)<`T`>> \| `undefined`

## Index

---

