[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [Query](../interfaces/sqrs.query.md)

# Interface: Query

Base interface that queries implement

*__interface__*: Query

*__extends__*: {BoundType}

*__template__*: TName - query name type

*__template__*: TReturnValue - return value type

## Type parameters
#### TName :  `string`
#### TReturnValue 
## Hierarchy

 [BoundType](sqrs.boundtype.md)<`TReturnValue`>

**↳ Query**

## Index

### Properties

* [__computed](sqrs.query.md#__computed)
* [queryName](sqrs.query.md#queryname)

---

## Properties

<a id="__computed"></a>

### `<Optional>` __computed

**● __computed**: *[T]()*

*Inherited from [BoundType](sqrs.boundtype.md).[__computed](sqrs.boundtype.md#__computed)*

*Defined in [di/dependencies.ts:20](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/di/dependencies.ts#L20)*

Used only to guarantee type safety don't use this field directly as it will always be empty.

*__deprecated__*:
 

*__type__*: {T}

*__memberof__*: BoundType

___
<a id="queryname"></a>

###  queryName

**● queryName**: *`TName`*

*Defined in [queries/Query.ts:15](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/queries/Query.ts#L15)*

___

