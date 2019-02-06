[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [Container](../interfaces/sqrs.container.md)

# Interface: Container

Interface of container used to resolve dependencies

*__interface__*: Container

## Hierarchy

**Container**

## Index

### Methods

* [get](sqrs.container.md#get)
* [getAll](sqrs.container.md#getall)
* [isBound](sqrs.container.md#isbound)

---

## Methods

<a id="get"></a>

###  get

▸ **get**<`T`>(identifier: *[DependencyIdentifier](../modules/sqrs.md#dependencyidentifier)<`T`>*): `T` \| `undefined`

*Defined in [di/Container.ts:21](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/di/Container.ts#L21)*

Resolves an instance of type by it's identifier. This method may throw an exception if type is not found or return undefined.

*__template__*: T

*__memberof__*: Container

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| identifier | [DependencyIdentifier](../modules/sqrs.md#dependencyidentifier)<`T`> |  \- |

**Returns:** `T` \| `undefined`

___
<a id="getall"></a>

###  getAll

▸ **getAll**<`T`>(identifier: *[DependencyIdentifier](../modules/sqrs.md#dependencyidentifier)<`T`>*): `T`[]

*Defined in [di/Container.ts:31](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/di/Container.ts#L31)*

Resolves all registered instances of type by it's identifier. This method never throws and returns empty array when no registrations have been found.

*__template__*: T

*__memberof__*: Container

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| identifier | [DependencyIdentifier](../modules/sqrs.md#dependencyidentifier)<`T`> |  \- |

**Returns:** `T`[]

___
<a id="isbound"></a>

###  isBound

▸ **isBound**(identifier: *[DependencyIdentifier](../modules/sqrs.md#dependencyidentifier)<`any`>*): `boolean`

*Defined in [di/Container.ts:40](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/di/Container.ts#L40)*

Returns boolean value indicating if given identifier was registered and can be resolved. This method never throws.

*__memberof__*: Container

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| identifier | [DependencyIdentifier](../modules/sqrs.md#dependencyidentifier)<`any`> |  \- |

**Returns:** `boolean`

___

