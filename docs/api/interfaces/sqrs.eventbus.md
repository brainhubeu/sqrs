[@brainhubeu/sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [EventBus](../interfaces/sqrs.eventbus.md)

# Interface: EventBus

Interface for event bus that allows raising events that will be sent to appropriate handlers

*__interface__*: EventBus

## Hierarchy

**EventBus**

## Implemented by

* [DefaultEventBus](../classes/sqrs.defaulteventbus.md)

## Index

### Methods

* [raise](sqrs.eventbus.md#raise)

---

## Methods

<a id="raise"></a>

###  raise

▸ **raise**(event: *[Event](sqrs.event.md)*): `void`

*Defined in [events/EventBus.ts:24](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/events/EventBus.ts#L24)*

Raises event and sends it to appropriate handlers

*__memberof__*: EventBus

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | [Event](sqrs.event.md) |  event to handle |

**Returns:** `void`

___

