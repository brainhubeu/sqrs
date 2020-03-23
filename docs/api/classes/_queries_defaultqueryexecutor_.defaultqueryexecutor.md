[@brainhubeu/sqrs](../README.md) › ["queries/DefaultQueryExecutor"](../modules/_queries_defaultqueryexecutor_.md) › [DefaultQueryExecutor](_queries_defaultqueryexecutor_.defaultqueryexecutor.md)

# Class: DefaultQueryExecutor

## Hierarchy

* **DefaultQueryExecutor**

## Implements

* [QueryExecutor](../interfaces/_queries_queryexecutor_.queryexecutor.md)

## Index

### Constructors

* [constructor](_queries_defaultqueryexecutor_.defaultqueryexecutor.md#constructor)

### Properties

* [dependencies](_queries_defaultqueryexecutor_.defaultqueryexecutor.md#static-dependencies)

### Methods

* [execute](_queries_defaultqueryexecutor_.defaultqueryexecutor.md#execute)

## Constructors

###  constructor

\+ **new DefaultQueryExecutor**(`queryHandlerProvider`: [QueryHandlerProvider](../interfaces/_queries_queryhandlerprovider_.queryhandlerprovider.md)): *[DefaultQueryExecutor](_queries_defaultqueryexecutor_.defaultqueryexecutor.md)*

*Defined in [queries/DefaultQueryExecutor.ts:13](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/queries/DefaultQueryExecutor.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`queryHandlerProvider` | [QueryHandlerProvider](../interfaces/_queries_queryhandlerprovider_.queryhandlerprovider.md) |

**Returns:** *[DefaultQueryExecutor](_queries_defaultqueryexecutor_.defaultqueryexecutor.md)*

## Properties

### `Static` dependencies

▪ **dependencies**: *[Dependencies](../modules/_di_dependencies_.md#dependencies)‹typeof DefaultQueryExecutor›* = [
    queryHandlerProviderId
  ]

*Defined in [queries/DefaultQueryExecutor.ts:11](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/queries/DefaultQueryExecutor.ts#L11)*

## Methods

###  execute

▸ **execute**<**T**>(`query`: [Query](../interfaces/_queries_query_.query.md)‹string, T›): *Promise‹T›*

*Implementation of [QueryExecutor](../interfaces/_queries_queryexecutor_.queryexecutor.md)*

*Defined in [queries/DefaultQueryExecutor.ts:20](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/queries/DefaultQueryExecutor.ts#L20)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Query](../interfaces/_queries_query_.query.md)‹string, T› |

**Returns:** *Promise‹T›*
