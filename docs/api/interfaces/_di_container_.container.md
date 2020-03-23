[@brainhubeu/sqrs](../README.md) › ["di/Container"](../modules/_di_container_.md) › [Container](_di_container_.container.md)

# Interface: Container

Interface of container used to resolve dependencies

**`interface`** Container

## Hierarchy

* **Container**

## Index

### Methods

* [get](_di_container_.container.md#get)
* [getAll](_di_container_.container.md#getall)
* [isBound](_di_container_.container.md#isbound)

## Methods

###  get

▸ **get**<**T**>(`identifier`: [DependencyIdentifier](../modules/_di_dependencies_.md#dependencyidentifier)‹T›): *T | undefined*

*Defined in [di/Container.ts:21](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/di/Container.ts#L21)*

Resolves an instance of type by it's identifier.
This method may throw an exception if type is not found or return undefined.

**`memberof`** Container

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`identifier` | [DependencyIdentifier](../modules/_di_dependencies_.md#dependencyidentifier)‹T› |

**Returns:** *T | undefined*

___

###  getAll

▸ **getAll**<**T**>(`identifier`: [DependencyIdentifier](../modules/_di_dependencies_.md#dependencyidentifier)‹T›): *T[]*

*Defined in [di/Container.ts:31](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/di/Container.ts#L31)*

Resolves all registered instances of type by it's identifier.
This method never throws and returns empty array when no registrations have been found.

**`memberof`** Container

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`identifier` | [DependencyIdentifier](../modules/_di_dependencies_.md#dependencyidentifier)‹T› |

**Returns:** *T[]*

___

###  isBound

▸ **isBound**(`identifier`: [DependencyIdentifier](../modules/_di_dependencies_.md#dependencyidentifier)‹any›): *boolean*

*Defined in [di/Container.ts:40](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/di/Container.ts#L40)*

Returns boolean value indicating if given identifier was registered and can be resolved.
This method never throws.

**`memberof`** Container

**Parameters:**

Name | Type |
------ | ------ |
`identifier` | [DependencyIdentifier](../modules/_di_dependencies_.md#dependencyidentifier)‹any› |

**Returns:** *boolean*
