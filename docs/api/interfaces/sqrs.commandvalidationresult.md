[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [CommandValidationResult](../interfaces/sqrs.commandvalidationresult.md)

# Interface: CommandValidationResult

Generic command validation result

*__interface__*: CommandValidationResult

*__template__*: TError - type of validation error, default string

## Type parameters
#### TError 
## Hierarchy

**CommandValidationResult**

## Index

### Properties

* [errors](sqrs.commandvalidationresult.md#errors)
* [isValid](sqrs.commandvalidationresult.md#isvalid)

---

## Properties

<a id="errors"></a>

### `<Optional>` errors

**● errors**: *`TError`[]*

*Defined in [commands/CommandValidator.ts:37](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/commands/CommandValidator.ts#L37)*

Array of validation errors

*__type__*: {TError\[\]}

*__memberof__*: CommandValidationResult

___
<a id="isvalid"></a>

###  isValid

**● isValid**: *`boolean`*

*Defined in [commands/CommandValidator.ts:30](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/commands/CommandValidator.ts#L30)*

Flag that indicates if the command was validated successfully

*__type__*: {boolean}

*__memberof__*: CommandValidationResult

___

