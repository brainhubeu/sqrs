[@brainhubeu/sqrs](../README.md) › ["queries/QueryHandler"](_queries_queryhandler_.md)

# Module: "queries/QueryHandler"

## Index

### Interfaces

* [QueryHandler](../interfaces/_queries_queryhandler_.queryhandler.md)

### Functions

* [queryHandlerId](_queries_queryhandler_.md#queryhandlerid)

## Functions

###  queryHandlerId

▸ **queryHandlerId**(`queryName`: string): *symbol & [BoundType](../interfaces/_di_dependencies_.boundtype.md)‹[QueryHandler](../interfaces/_queries_queryhandler_.queryhandler.md)‹[Query](../interfaces/_queries_query_.query.md)‹string, unknown›››*

*Defined in [queries/QueryHandler.ts:12](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/queries/QueryHandler.ts#L12)*

Returns reusable DependencyIdentifier for given query name identifying query handler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`queryName` | string | query name |

**Returns:** *symbol & [BoundType](../interfaces/_di_dependencies_.boundtype.md)‹[QueryHandler](../interfaces/_queries_queryhandler_.queryhandler.md)‹[Query](../interfaces/_queries_query_.query.md)‹string, unknown›››*
