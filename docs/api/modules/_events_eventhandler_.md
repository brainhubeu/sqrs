[@brainhubeu/sqrs](../README.md) › ["events/EventHandler"](_events_eventhandler_.md)

# Module: "events/EventHandler"

## Index

### Interfaces

* [EventHandler](../interfaces/_events_eventhandler_.eventhandler.md)

### Functions

* [eventHandlerId](_events_eventhandler_.md#eventhandlerid)

## Functions

###  eventHandlerId

▸ **eventHandlerId**(`type`: string): *[DependencyIdentifier](_di_dependencies_.md#dependencyidentifier)‹[EventHandler](../interfaces/_events_eventhandler_.eventhandler.md)›*

*Defined in [events/EventHandler.ts:12](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/events/EventHandler.ts#L12)*

Returns reusable DependencyIdentifier for given event type identifying event handler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | string | event type |

**Returns:** *[DependencyIdentifier](_di_dependencies_.md#dependencyidentifier)‹[EventHandler](../interfaces/_events_eventhandler_.eventhandler.md)›*
