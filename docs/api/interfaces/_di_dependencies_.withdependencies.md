[@brainhubeu/sqrs](../README.md) › ["di/dependencies"](../modules/_di_dependencies_.md) › [WithDependencies](_di_dependencies_.withdependencies.md)

# Interface: WithDependencies <**T, R**>

Describes a class type with declared dependencies

**`example`** 
class Foo {
  static dependencies: Dependencies<typeof Foo> = [
    depId<number>('number'),
    depId<string>('string'),
  ]
  constructor(a: number, b: string) {}
}
const bar: WithDependencies = Foo;

**`interface`** WithDependencies

## Type parameters

▪ **T**: *any[]*

▪ **R**

## Hierarchy

* **WithDependencies**

## Index

### Constructors

* [constructor](_di_dependencies_.withdependencies.md#constructor)

### Properties

* [dependencies](_di_dependencies_.withdependencies.md#dependencies)

## Constructors

###  constructor

\+ **new WithDependencies**(...`args`: T): *R*

*Defined in [di/dependencies.ts:76](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/di/dependencies.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | T |

**Returns:** *R*

## Properties

###  dependencies

• **dependencies**: *[DependencyIdentifiers](../modules/_di_dependencies_.md#dependencyidentifiers)‹T›*

*Defined in [di/dependencies.ts:76](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/di/dependencies.ts#L76)*
