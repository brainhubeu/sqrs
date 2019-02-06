[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [WithDependencies](../interfaces/sqrs.withdependencies.md)

# Interface: WithDependencies

Describes a class type with declared dependencies

*__example__*: class Foo { static dependencies: Dependencies = \[ depId('number'), depId('string'), \] constructor(a: number, b: string) {} } const bar: WithDependencies = Foo;

*__interface__*: WithDependencies

*__template__*: T

*__template__*: R

## Type parameters
#### T :  `any`[]
#### R 
## Hierarchy

**WithDependencies**

## Index

### Constructors

* [constructor](sqrs.withdependencies.md#constructor)

### Properties

* [dependencies](sqrs.withdependencies.md#dependencies)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new WithDependencies**(...args: *`T`*): `R`

*Defined in [di/dependencies.ts:76](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/di/dependencies.ts#L76)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `T` |

**Returns:** `R`

___

## Properties

<a id="dependencies"></a>

###  dependencies

**● dependencies**: *[DependencyIdentifiers](../modules/sqrs.md#dependencyidentifiers)<`T`>*

*Defined in [di/dependencies.ts:76](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/di/dependencies.ts#L76)*

___

