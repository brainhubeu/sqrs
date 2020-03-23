[@brainhubeu/sqrs](../README.md) › ["queries/Query"](../modules/_queries_query_.md) › [Query](_queries_query_.query.md)

# Interface: Query <**TName, TReturnValue**>

Base interface that queries implement

**`interface`** Query

## Type parameters

▪ **TName**: *string*

query name type

▪ **TReturnValue**

return value type

## Hierarchy

* [BoundType](_di_dependencies_.boundtype.md)‹TReturnValue›

  ↳ **Query**

## Index

### Properties

* [[boundTypeSymbol]](_queries_query_.query.md#optional-[boundtypesymbol])
* [queryName](_queries_query_.query.md#queryname)

## Properties

### `Optional` [boundTypeSymbol]

• **[boundTypeSymbol]**? : *T*

*Inherited from [BoundType](_di_dependencies_.boundtype.md).[[boundTypeSymbol]](_di_dependencies_.boundtype.md#optional-[boundtypesymbol])*

*Defined in [di/dependencies.ts:20](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/di/dependencies.ts#L20)*

Used only to guarantee type safety don't use this field directly as it will always be empty.

**`deprecated`** 

**`memberof`** BoundType

___

###  queryName

• **queryName**: *TName*

*Defined in [queries/Query.ts:15](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/queries/Query.ts#L15)*
