[@brainhubeu/sqrs](../README.md) › ["di/dependencies"](_di_dependencies_.md)

# Module: "di/dependencies"

## Index

### Interfaces

* [BoundType](../interfaces/_di_dependencies_.boundtype.md)
* [WithDependencies](../interfaces/_di_dependencies_.withdependencies.md)

### Type aliases

* [Dependencies](_di_dependencies_.md#dependencies)
* [DependencyIdentifier](_di_dependencies_.md#dependencyidentifier)
* [DependencyIdentifiers](_di_dependencies_.md#dependencyidentifiers)

### Variables

* [boundTypeSymbol](_di_dependencies_.md#const-boundtypesymbol)

### Functions

* [depId](_di_dependencies_.md#depid)

## Type aliases

###  Dependencies

Ƭ **Dependencies**:

*Defined in [di/dependencies.ts:55](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/di/dependencies.ts#L55)*

Describes DependencyIdentifiers of given class or function.

**`example`** 
const foo = (a: number, b: string) => 1;
// returns [DependencyIdentifier<number>, DependencyIdentifier<string>]
type FooDependencies = Dependencies<typeof foo>;

**`example`** 
class Foo {
  constructor(a: number, b: string) {}
}
// returns [DependencyIdentifier<number>, DependencyIdentifier<string>]
type FooDependencies = Dependencies<typeof Foo>;

___

###  DependencyIdentifier

Ƭ **DependencyIdentifier**: *symbol & [BoundType](../interfaces/_di_dependencies_.boundtype.md)‹T›*

*Defined in [di/dependencies.ts:26](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/di/dependencies.ts#L26)*

Describes identifier of a dependency bound to a type

___

###  DependencyIdentifiers

Ƭ **DependencyIdentifiers**: *object*

*Defined in [di/dependencies.ts:40](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/di/dependencies.ts#L40)*

#### Type declaration:

## Variables

### `Const` boundTypeSymbol

• **boundTypeSymbol**: *unique symbol* = Symbol('__boundTypeSymbol__')

*Defined in [di/dependencies.ts:4](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/di/dependencies.ts#L4)*

## Functions

###  depId

▸ **depId**<**T**>(`id`: string, `reuse`: boolean): *[DependencyIdentifier](_di_dependencies_.md#dependencyidentifier)‹T›*

*Defined in [di/dependencies.ts:36](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/di/dependencies.ts#L36)*

Creates a symbol for given string that can be used as a dependency indentifier

**Type parameters:**

▪ **T**

type of dependency

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`id` | string | - | string identifier to create Symbol from |
`reuse` | boolean | false | - |

**Returns:** *[DependencyIdentifier](_di_dependencies_.md#dependencyidentifier)‹T›*
