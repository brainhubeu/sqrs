[@brainhubeu/sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [CommandResult](../interfaces/sqrs.commandresult.md)

# Interface: CommandResult

Generic interface describing result of running command

*__interface__*: CommandResult

*__template__*: TValidationError

## Type parameters
#### TValidationError 
## Hierarchy

**CommandResult**

## Index

### Properties

* [executionError](sqrs.commandresult.md#executionerror)
* [isValid](sqrs.commandresult.md#isvalid)
* [success](sqrs.commandresult.md#success)
* [validationErrors](sqrs.commandresult.md#validationerrors)

---

## Properties

<a id="executionerror"></a>

### `<Optional>` executionError

**● executionError**: *`Error`*

*Defined in [commands/DefaultCommandBus.ts:21](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/DefaultCommandBus.ts#L21)*

___
<a id="isvalid"></a>

###  isValid

**● isValid**: *`boolean`*

*Defined in [commands/DefaultCommandBus.ts:19](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/DefaultCommandBus.ts#L19)*

___
<a id="success"></a>

###  success

**● success**: *`boolean`*

*Defined in [commands/DefaultCommandBus.ts:18](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/DefaultCommandBus.ts#L18)*

___
<a id="validationerrors"></a>

### `<Optional>` validationErrors

**● validationErrors**: *`TValidationError`[]*

*Defined in [commands/DefaultCommandBus.ts:20](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/DefaultCommandBus.ts#L20)*

___

