[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [QueryHandlerProvider](../interfaces/sqrs.queryhandlerprovider.md)

# Interface: QueryHandlerProvider

A function that resolves a query handler by the query name.

*__interface__*: QueryHandlerProvider

## Hierarchy

**QueryHandlerProvider**

## Callable
▸ **__call**<`TName`,`TResult`>(queryName: *`TName`*): [QueryHandler](sqrs.queryhandler.md)<[Query](sqrs.query.md)<`TName`, `TResult`>> \| `undefined`

*Defined in [queries/QueryHandlerProvider.ts:19](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/queries/QueryHandlerProvider.ts#L19)*

A function that resolves a query handler by the query name.

**Type parameters:**

#### TName :  `string`
#### TResult 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| queryName | `TName` |  query name |

**Returns:** [QueryHandler](sqrs.queryhandler.md)<[Query](sqrs.query.md)<`TName`, `TResult`>> \| `undefined`

## Index

---

