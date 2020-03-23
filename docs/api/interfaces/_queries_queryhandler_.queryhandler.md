[@brainhubeu/sqrs](../README.md) › ["queries/QueryHandler"](../modules/_queries_queryhandler_.md) › [QueryHandler](_queries_queryhandler_.queryhandler.md)

# Interface: QueryHandler <**TQuery**>

Base interface that query handlers implement

**`interface`** QueryHandler

## Type parameters

▪ **TQuery**: *[Query](_queries_query_.query.md)‹string, unknown›*

type of handled query

## Hierarchy

* **QueryHandler**

## Index

### Methods

* [execute](_queries_queryhandler_.queryhandler.md#execute)

## Methods

###  execute

▸ **execute**(`query`: TQuery): *TQuery extends Query<string, infer TResult> ? Promise<TResult> : never*

*Defined in [queries/QueryHandler.ts:30](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/queries/QueryHandler.ts#L30)*

Executes a query returning results

**`memberof`** QueryHandler

**Parameters:**

Name | Type |
------ | ------ |
`query` | TQuery |

**Returns:** *TQuery extends Query<string, infer TResult> ? Promise<TResult> : never*
