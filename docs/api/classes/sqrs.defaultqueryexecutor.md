[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [DefaultQueryExecutor](../classes/sqrs.defaultqueryexecutor.md)

# Class: DefaultQueryExecutor

## Hierarchy

**DefaultQueryExecutor**

## Implements

* [QueryExecutor](../interfaces/sqrs.queryexecutor.md)

## Index

### Constructors

* [constructor](sqrs.defaultqueryexecutor.md#constructor)

### Properties

* [dependencies](sqrs.defaultqueryexecutor.md#dependencies)

### Methods

* [execute](sqrs.defaultqueryexecutor.md#execute)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DefaultQueryExecutor**(queryHandlerProvider: *[QueryHandlerProvider](../interfaces/sqrs.queryhandlerprovider.md)*): [DefaultQueryExecutor](sqrs.defaultqueryexecutor.md)

*Defined in [queries/DefaultQueryExecutor.ts:13](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/queries/DefaultQueryExecutor.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| queryHandlerProvider | [QueryHandlerProvider](../interfaces/sqrs.queryhandlerprovider.md) |

**Returns:** [DefaultQueryExecutor](sqrs.defaultqueryexecutor.md)

___

## Properties

<a id="dependencies"></a>

### `<Static>` dependencies

**● dependencies**: *[Dependencies](../modules/sqrs.md#dependencies)<[DefaultQueryExecutor](sqrs.defaultqueryexecutor.md)>* =  [
    queryHandlerProviderId
  ]

*Defined in [queries/DefaultQueryExecutor.ts:11](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/queries/DefaultQueryExecutor.ts#L11)*

___

## Methods

<a id="execute"></a>

###  execute

▸ **execute**<`T`>(query: *[Query](../interfaces/sqrs.query.md)<`string`, `T`>*): `Promise`<`T`>

*Implementation of [QueryExecutor](../interfaces/sqrs.queryexecutor.md).[execute](../interfaces/sqrs.queryexecutor.md#execute)*

*Defined in [queries/DefaultQueryExecutor.ts:20](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/queries/DefaultQueryExecutor.ts#L20)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| query | [Query](../interfaces/sqrs.query.md)<`string`, `T`> |

**Returns:** `Promise`<`T`>

___

