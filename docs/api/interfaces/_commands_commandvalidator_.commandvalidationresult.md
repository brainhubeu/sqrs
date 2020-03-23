[@brainhubeu/sqrs](../README.md) › ["commands/CommandValidator"](../modules/_commands_commandvalidator_.md) › [CommandValidationResult](_commands_commandvalidator_.commandvalidationresult.md)

# Interface: CommandValidationResult <**TError**>

Generic command validation result

**`interface`** CommandValidationResult

## Type parameters

▪ **TError**

type of validation error, default string

## Hierarchy

* **CommandValidationResult**

## Index

### Properties

* [errors](_commands_commandvalidator_.commandvalidationresult.md#optional-errors)
* [isValid](_commands_commandvalidator_.commandvalidationresult.md#isvalid)

## Properties

### `Optional` errors

• **errors**? : *TError[]*

*Defined in [commands/CommandValidator.ts:37](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/commands/CommandValidator.ts#L37)*

Array of validation errors

**`memberof`** CommandValidationResult

___

###  isValid

• **isValid**: *boolean*

*Defined in [commands/CommandValidator.ts:30](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/commands/CommandValidator.ts#L30)*

Flag that indicates if the command was validated successfully

**`memberof`** CommandValidationResult
