[@brainhubeu/sqrs](../README.md) › ["events/EventBus"](../modules/_events_eventbus_.md) › [EventBus](_events_eventbus_.eventbus.md)

# Interface: EventBus

Interface for event bus that allows raising events that will be sent to appropriate handlers

**`interface`** EventBus

## Hierarchy

* **EventBus**

## Implemented by

* [DefaultEventBus](../classes/_events_defaulteventbus_.defaulteventbus.md)

## Index

### Methods

* [raise](_events_eventbus_.eventbus.md#raise)

## Methods

###  raise

▸ **raise**(`event`: [Event](sqrs.event.md)): *void*

*Defined in [events/EventBus.ts:24](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/events/EventBus.ts#L24)*

Raises event and sends it to appropriate handlers

**`memberof`** EventBus

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | [Event](sqrs.event.md) | event to handle |

**Returns:** *void*
