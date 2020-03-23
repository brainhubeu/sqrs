[@brainhubeu/sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [CommandValidator](../interfaces/sqrs.commandvalidator.md)

# Interface: CommandValidator

Base interface that command validators implement

*__interface__*: CommandValidator

*__template__*: TCommand - type of command that validator can validate

## Type parameters
#### TCommand :  [Command](sqrs.command.md)
## Hierarchy

**CommandValidator**

## Index

### Methods

* [validate](sqrs.commandvalidator.md#validate)

---

## Methods

<a id="validate"></a>

###  validate

▸ **validate**(command: *`TCommand`*): [CommandValidationResult](sqrs.commandvalidationresult.md) \| `Promise`<[CommandValidationResult](sqrs.commandvalidationresult.md)>

*Defined in [commands/CommandValidator.ts:54](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/CommandValidator.ts#L54)*

Validates command

*__memberof__*: CommandValidator

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| command | `TCommand` |  command to validate |

**Returns:** [CommandValidationResult](sqrs.commandvalidationresult.md) \| `Promise`<[CommandValidationResult](sqrs.commandvalidationresult.md)>

___

