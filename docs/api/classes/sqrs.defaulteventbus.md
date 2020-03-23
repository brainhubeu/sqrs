[@brainhubeu/sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [DefaultEventBus](../classes/sqrs.defaulteventbus.md)

# Class: DefaultEventBus

## Hierarchy

**DefaultEventBus**

## Implements

* [EventBus](../interfaces/sqrs.eventbus.md)

## Index

### Constructors

* [constructor](sqrs.defaulteventbus.md#constructor)

### Properties

* [dependencies](sqrs.defaulteventbus.md#dependencies)

### Methods

* [raise](sqrs.defaulteventbus.md#raise)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DefaultEventBus**(handlerProvider: *[EventHandlerProvider](../modules/sqrs.md#eventhandlerprovider)*): [DefaultEventBus](sqrs.defaulteventbus.md)

*Defined in [events/DefaultEventBus.ts:12](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/events/DefaultEventBus.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| handlerProvider | [EventHandlerProvider](../modules/sqrs.md#eventhandlerprovider) |

**Returns:** [DefaultEventBus](sqrs.defaulteventbus.md)

___

## Properties

<a id="dependencies"></a>

### `<Static>` dependencies

**● dependencies**: *[Dependencies](../modules/sqrs.md#dependencies)<[DefaultEventBus](sqrs.defaulteventbus.md)>* =  [
    eventHandlerProviderId
  ]

*Defined in [events/DefaultEventBus.ts:10](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/events/DefaultEventBus.ts#L10)*

___

## Methods

<a id="raise"></a>

###  raise

▸ **raise**(event: *[Event](../interfaces/sqrs.event.md)*): `Promise`<`void`>

*Implementation of [EventBus](../interfaces/sqrs.eventbus.md).[raise](../interfaces/sqrs.eventbus.md#raise)*

*Defined in [events/DefaultEventBus.ts:27](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/events/DefaultEventBus.ts#L27)*

Raises and event and waits until all promise handlers have executed rejecting with error of first handler that failed (without stopping others)

*__memberof__*: DefaultEventBus

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | [Event](../interfaces/sqrs.event.md) |  \- |

**Returns:** `Promise`<`void`>

___

