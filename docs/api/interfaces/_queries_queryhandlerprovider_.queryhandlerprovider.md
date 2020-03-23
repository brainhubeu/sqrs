[@brainhubeu/sqrs](../README.md) › ["queries/QueryHandlerProvider"](../modules/_queries_queryhandlerprovider_.md) › [QueryHandlerProvider](_queries_queryhandlerprovider_.queryhandlerprovider.md)

# Interface: QueryHandlerProvider

A function that resolves a query handler by the query name.

**`interface`** QueryHandlerProvider

## Hierarchy

* **QueryHandlerProvider**

## Callable

▸ <**TName**, **TResult**>(`queryName`: TName): *[QueryHandler](_queries_queryhandler_.queryhandler.md)‹[Query](_queries_query_.query.md)‹TName, TResult›› | undefined*

*Defined in [queries/QueryHandlerProvider.ts:19](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/queries/QueryHandlerProvider.ts#L19)*

A function that resolves a query handler by the query name.

**`interface`** QueryHandlerProvider

**Type parameters:**

▪ **TName**: *string*

▪ **TResult**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queryName` | TName | query name |

**Returns:** *[QueryHandler](_queries_queryhandler_.queryhandler.md)‹[Query](_queries_query_.query.md)‹TName, TResult›› | undefined*
