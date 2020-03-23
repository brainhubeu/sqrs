[@brainhubeu/sqrs](../README.md) › ["queries/QueryExecutor"](../modules/_queries_queryexecutor_.md) › [QueryExecutor](_queries_queryexecutor_.queryexecutor.md)

# Interface: QueryExecutor

Interface for query executor that allows executing queries
by dispatching them to appropriate query handlers

**`interface`** QueryExecutor

## Hierarchy

* **QueryExecutor**

## Implemented by

* [DefaultQueryExecutor](../classes/_queries_defaultqueryexecutor_.defaultqueryexecutor.md)

## Index

### Methods

* [execute](_queries_queryexecutor_.queryexecutor.md#execute)

## Methods

###  execute

▸ **execute**<**T**>(`query`: [Query](_queries_query_.query.md)‹string, T›): *Promise‹T›*

*Defined in [queries/QueryExecutor.ts:27](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/queries/QueryExecutor.ts#L27)*

Executes a given query by dispatching it to a query handler

**`memberof`** QueryExecutor

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`query` | [Query](_queries_query_.query.md)‹string, T› | query to execute |

**Returns:** *Promise‹T›*

- query results
