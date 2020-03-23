[@brainhubeu/sqrs](../README.md) › ["events/EventHandler"](../modules/_events_eventhandler_.md) › [EventHandler](_events_eventhandler_.eventhandler.md)

# Interface: EventHandler <**TEvent**>

Base interface that event handlers implement

**`interface`** CommandHandler

**`template`** type of handled event

## Type parameters

▪ **TEvent**: *[Event](sqrs.event.md)*

## Hierarchy

* **EventHandler**

## Index

### Methods

* [handle](_events_eventhandler_.eventhandler.md#handle)

## Methods

###  handle

▸ **handle**(`event`: TEvent): *void | Promise‹void›*

*Defined in [events/EventHandler.ts:30](https://github.com/brainhubeu/sqrs/blob/5e9c52a/packages/sqrs/src/events/EventHandler.ts#L30)*

Handles an event

**`memberof`** EventHandler

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | TEvent | event to handle |

**Returns:** *void | Promise‹void›*

- either nothing or a Promise that resolves when event is handled
