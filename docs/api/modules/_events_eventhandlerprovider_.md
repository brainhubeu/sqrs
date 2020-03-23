[@brainhubeu/sqrs](../README.md) › ["events/EventHandlerProvider"](_events_eventhandlerprovider_.md)

# Module: "events/EventHandlerProvider"

## Index

### Type aliases

* [EventHandlerProvider](_events_eventhandlerprovider_.md#eventhandlerprovider)

### Variables

* [eventHandlerProviderId](_events_eventhandlerprovider_.md#const-eventhandlerproviderid)

### Functions

* [containerEventHandlerProviderFactory](_events_eventhandlerprovider_.md#containereventhandlerproviderfactory)

## Type aliases

###  EventHandlerProvider

Ƭ **EventHandlerProvider**: *function*

*Defined in [events/EventHandlerProvider.ts:18](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/events/EventHandlerProvider.ts#L18)*

A function that resolves an event handler by the event type.

**`param`** event type

**`interface`** EventHandlerProvider

#### Type declaration:

▸ (`type`: string): *[EventHandler](../interfaces/_events_eventhandler_.eventhandler.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

## Variables

### `Const` eventHandlerProviderId

• **eventHandlerProviderId**: *symbol & [BoundType](../interfaces/_di_dependencies_.boundtype.md)‹function›* = depId<EventHandlerProvider>('EventHandlerProvider')

*Defined in [events/EventHandlerProvider.ts:10](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/events/EventHandlerProvider.ts#L10)*

DependencyIdentifier of EventHandlerProvider

## Functions

###  containerEventHandlerProviderFactory

▸ **containerEventHandlerProviderFactory**(`container`: [Container](../interfaces/_di_container_.container.md)): *[EventHandlerProvider](_events_eventhandlerprovider_.md#eventhandlerprovider)*

*Defined in [events/EventHandlerProvider.ts:26](https://github.com/brainhubeu/sqrs/blob/master/packages/sqrs/src/events/EventHandlerProvider.ts#L26)*

Creates a function that resolves event handler from the container for a given event by it's type

**Parameters:**

Name | Type |
------ | ------ |
`container` | [Container](../interfaces/_di_container_.container.md) |

**Returns:** *[EventHandlerProvider](_events_eventhandlerprovider_.md#eventhandlerprovider)*
