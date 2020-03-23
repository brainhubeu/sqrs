[@brainhubeu/sqrs](../README.md) › ["events/DefaultEventBus"](../modules/_events_defaulteventbus_.md) › [DefaultEventBus](_events_defaulteventbus_.defaulteventbus.md)

# Class: DefaultEventBus

## Hierarchy

* **DefaultEventBus**

## Implements

* [EventBus](../interfaces/_events_eventbus_.eventbus.md)

## Index

### Constructors

* [constructor](_events_defaulteventbus_.defaulteventbus.md#constructor)

### Properties

* [dependencies](_events_defaulteventbus_.defaulteventbus.md#static-dependencies)

### Methods

* [raise](_events_defaulteventbus_.defaulteventbus.md#raise)

## Constructors

###  constructor

\+ **new DefaultEventBus**(`handlerProvider`: [EventHandlerProvider](../modules/_events_eventhandlerprovider_.md#eventhandlerprovider)): *[DefaultEventBus](_events_defaulteventbus_.defaulteventbus.md)*

*Defined in [events/DefaultEventBus.ts:12](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/events/DefaultEventBus.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`handlerProvider` | [EventHandlerProvider](../modules/_events_eventhandlerprovider_.md#eventhandlerprovider) |

**Returns:** *[DefaultEventBus](_events_defaulteventbus_.defaulteventbus.md)*

## Properties

### `Static` dependencies

▪ **dependencies**: *[Dependencies](../modules/_di_dependencies_.md#dependencies)‹typeof DefaultEventBus›* = [
    eventHandlerProviderId
  ]

*Defined in [events/DefaultEventBus.ts:10](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/events/DefaultEventBus.ts#L10)*

## Methods

###  raise

▸ **raise**(`event`: [Event](../interfaces/sqrs.event.md)): *Promise‹void›*

*Implementation of [EventBus](../interfaces/_events_eventbus_.eventbus.md)*

*Defined in [events/DefaultEventBus.ts:27](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/events/DefaultEventBus.ts#L27)*

Raises and event and waits until all promise handlers have executed
rejecting with error of first handler that failed (without stopping others)

**`memberof`** DefaultEventBus

**Parameters:**

Name | Type |
------ | ------ |
`event` | [Event](../interfaces/sqrs.event.md) |

**Returns:** *Promise‹void›*
