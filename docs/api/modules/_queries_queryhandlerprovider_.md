[@brainhubeu/sqrs](../README.md) › ["queries/QueryHandlerProvider"](_queries_queryhandlerprovider_.md)

# Module: "queries/QueryHandlerProvider"

## Index

### Interfaces

* [QueryHandlerProvider](../interfaces/_queries_queryhandlerprovider_.queryhandlerprovider.md)

### Variables

* [queryHandlerProviderId](_queries_queryhandlerprovider_.md#const-queryhandlerproviderid)

### Functions

* [containerQueryHandlerProviderFactory](_queries_queryhandlerprovider_.md#containerqueryhandlerproviderfactory)

## Variables

### `Const` queryHandlerProviderId

• **queryHandlerProviderId**: *symbol & [BoundType](../interfaces/_di_dependencies_.boundtype.md)‹[QueryHandlerProvider](../interfaces/_queries_queryhandlerprovider_.queryhandlerprovider.md)›* = depId<QueryHandlerProvider>('QueryHandlerProvider')

*Defined in [queries/QueryHandlerProvider.ts:11](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/queries/QueryHandlerProvider.ts#L11)*

DependencyIdentifier of QueryHandlerProvider

## Functions

###  containerQueryHandlerProviderFactory

▸ **containerQueryHandlerProviderFactory**(`container`: [Container](../interfaces/_di_container_.container.md)): *[QueryHandlerProvider](../interfaces/_queries_queryhandlerprovider_.queryhandlerprovider.md)*

*Defined in [queries/QueryHandlerProvider.ts:29](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/queries/QueryHandlerProvider.ts#L29)*

Creates a function that resolves query handler from the container for a given query by it's queryName

**Parameters:**

Name | Type |
------ | ------ |
`container` | [Container](../interfaces/_di_container_.container.md) |

**Returns:** *[QueryHandlerProvider](../interfaces/_queries_queryhandlerprovider_.queryhandlerprovider.md)*
