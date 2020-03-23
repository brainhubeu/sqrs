[@brainhubeu/sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [QueryExecutor](../interfaces/sqrs.queryexecutor.md)

# Interface: QueryExecutor

Interface for query executor that allows executing queries by dispatching them to appropriate query handlers

*__interface__*: QueryExecutor

## Hierarchy

**QueryExecutor**

## Implemented by

* [DefaultQueryExecutor](../classes/sqrs.defaultqueryexecutor.md)

## Index

### Methods

* [execute](sqrs.queryexecutor.md#execute)

---

## Methods

<a id="execute"></a>

###  execute

▸ **execute**<`T`>(query: *[Query](sqrs.query.md)<`string`, `T`>*): `Promise`<`T`>

*Defined in [queries/QueryExecutor.ts:27](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/queries/QueryExecutor.ts#L27)*

Executes a given query by dispatching it to a query handler

*__template__*: T

*__memberof__*: QueryExecutor

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| query | [Query](sqrs.query.md)<`string`, `T`> |  query to execute |

**Returns:** `Promise`<`T`>
- query results

___

