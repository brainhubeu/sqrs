[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [QueryHandler](../interfaces/sqrs.queryhandler.md)

# Interface: QueryHandler

Base interface that query handlers implement

*__interface__*: QueryHandler

*__template__*: TQuery - type of handled query

## Type parameters
#### TQuery :  [Query](sqrs.query.md)<`string`, `unknown`>
## Hierarchy

**QueryHandler**

## Index

### Methods

* [execute](sqrs.queryhandler.md#execute)

---

## Methods

<a id="execute"></a>

###  execute

▸ **execute**(query: *`TQuery`*): `TQuery extends Query&lt;string, infer TResult&gt; ? Promise&lt;TResult&gt; : never`

*Defined in [queries/QueryHandler.ts:30](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/queries/QueryHandler.ts#L30)*

Executes a query returning results

*__memberof__*: QueryHandler

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| query | `TQuery` |  \- |

**Returns:** `TQuery extends Query&lt;string, infer TResult&gt; ? Promise&lt;TResult&gt; : never`

___

