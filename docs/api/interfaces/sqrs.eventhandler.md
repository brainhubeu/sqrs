[sqrs](../README.md) > [sqrs](../modules/sqrs.md) > [EventHandler](../interfaces/sqrs.eventhandler.md)

# Interface: EventHandler

Base interface that event handlers implement

*__interface__*: CommandHandler

*__template__*: TCommand - type of handled event

## Type parameters
#### TEvent :  [Event](sqrs.event.md)
## Hierarchy

**EventHandler**

## Index

### Methods

* [handle](sqrs.eventhandler.md#handle)

---

## Methods

<a id="handle"></a>

###  handle

▸ **handle**(event: *`TEvent`*): `void` \| `Promise`<`void`>

*Defined in [events/EventHandler.ts:30](https://github.com/rkostrzewski/sqrs/blob/2a5a94e/packages/sqrs/src/events/EventHandler.ts#L30)*

Handles an event

*__memberof__*: EventHandler

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | `TEvent` |  event to handle |

**Returns:** `void` \| `Promise`<`void`>
- either nothing or a Promise that resolves when event is handled

___

