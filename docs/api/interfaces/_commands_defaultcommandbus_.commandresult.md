[@brainhubeu/sqrs](../README.md) › ["commands/DefaultCommandBus"](../modules/_commands_defaultcommandbus_.md) › [CommandResult](_commands_defaultcommandbus_.commandresult.md)

# Interface: CommandResult <**TValidationError**>

Generic interface describing result of running command

**`interface`** CommandResult

## Type parameters

▪ **TValidationError**

## Hierarchy

* **CommandResult**

## Index

### Properties

* [executionError](_commands_defaultcommandbus_.commandresult.md#optional-executionerror)
* [isValid](_commands_defaultcommandbus_.commandresult.md#isvalid)
* [success](_commands_defaultcommandbus_.commandresult.md#success)
* [validationErrors](_commands_defaultcommandbus_.commandresult.md#optional-validationerrors)

## Properties

### `Optional` executionError

• **executionError**? : *Error*

*Defined in [commands/DefaultCommandBus.ts:21](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/commands/DefaultCommandBus.ts#L21)*

___

###  isValid

• **isValid**: *boolean*

*Defined in [commands/DefaultCommandBus.ts:19](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/commands/DefaultCommandBus.ts#L19)*

___

###  success

• **success**: *boolean*

*Defined in [commands/DefaultCommandBus.ts:18](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/commands/DefaultCommandBus.ts#L18)*

___

### `Optional` validationErrors

• **validationErrors**? : *TValidationError[]*

*Defined in [commands/DefaultCommandBus.ts:20](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/commands/DefaultCommandBus.ts#L20)*
