[@brainhubeu/sqrs](../README.md) > [sqrs](../modules/sqrs.md)

# External module: sqrs

## Index

### Classes

* [DefaultCommandBus](../classes/sqrs.defaultcommandbus.md)
* [DefaultEventBus](../classes/sqrs.defaulteventbus.md)
* [DefaultQueryExecutor](../classes/sqrs.defaultqueryexecutor.md)

### Interfaces

* [BoundType](../interfaces/sqrs.boundtype.md)
* [Command](../interfaces/sqrs.command.md)
* [CommandBus](../interfaces/sqrs.commandbus.md)
* [CommandHandler](../interfaces/sqrs.commandhandler.md)
* [CommandHandlerProvider](../interfaces/sqrs.commandhandlerprovider.md)
* [CommandResult](../interfaces/sqrs.commandresult.md)
* [CommandValidationResult](../interfaces/sqrs.commandvalidationresult.md)
* [CommandValidator](../interfaces/sqrs.commandvalidator.md)
* [CommandValidatorProvider](../interfaces/sqrs.commandvalidatorprovider.md)
* [Container](../interfaces/sqrs.container.md)
* [Event](../interfaces/sqrs.event.md)
* [EventBus](../interfaces/sqrs.eventbus.md)
* [EventHandler](../interfaces/sqrs.eventhandler.md)
* [Query](../interfaces/sqrs.query.md)
* [QueryExecutor](../interfaces/sqrs.queryexecutor.md)
* [QueryHandler](../interfaces/sqrs.queryhandler.md)
* [QueryHandlerProvider](../interfaces/sqrs.queryhandlerprovider.md)
* [WithDependencies](../interfaces/sqrs.withdependencies.md)

### Type aliases

* [Dependencies](sqrs.md#dependencies)
* [DependencyIdentifier](sqrs.md#dependencyidentifier)
* [DependencyIdentifiers](sqrs.md#dependencyidentifiers)
* [EventHandlerProvider](sqrs.md#eventhandlerprovider)

### Variables

* [boundTypeSymbol](sqrs.md#boundtypesymbol)
* [commandBusId](sqrs.md#commandbusid)
* [commandHandlerProviderId](sqrs.md#commandhandlerproviderid)
* [commandValidatorProviderId](sqrs.md#commandvalidatorproviderid)
* [eventBusId](sqrs.md#eventbusid)
* [eventHandlerProviderId](sqrs.md#eventhandlerproviderid)
* [queryExecutorId](sqrs.md#queryexecutorid)
* [queryHandlerProviderId](sqrs.md#queryhandlerproviderid)

### Functions

* [commandHandlerId](sqrs.md#commandhandlerid)
* [commandValidatorId](sqrs.md#commandvalidatorid)
* [containerCommandHandlerProviderFactory](sqrs.md#containercommandhandlerproviderfactory)
* [containerCommandValidatorProviderFactory](sqrs.md#containercommandvalidatorproviderfactory)
* [containerEventHandlerProviderFactory](sqrs.md#containereventhandlerproviderfactory)
* [containerQueryHandlerProviderFactory](sqrs.md#containerqueryhandlerproviderfactory)
* [depId](sqrs.md#depid)
* [eventHandlerId](sqrs.md#eventhandlerid)
* [queryHandlerId](sqrs.md#queryhandlerid)

---

## Type aliases

<a id="dependencies"></a>

###  Dependencies

**Ƭ Dependencies**: *`Dependencies&lt;T&gt;`*

*Defined in [di/dependencies.ts:55](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/di/dependencies.ts#L55)*

Describes DependencyIdentifiers of given class or function.

*__example__*: const foo = (a: number, b: string) => 1; // returns \[DependencyIdentifier, DependencyIdentifier\] type FooDependencies = Dependencies;

*__example__*: class Foo { constructor(a: number, b: string) {} } // returns \[DependencyIdentifier, DependencyIdentifier\] type FooDependencies = Dependencies;

___
<a id="dependencyidentifier"></a>

###  DependencyIdentifier

**Ƭ DependencyIdentifier**: *`symbol` & [BoundType](../interfaces/sqrs.boundtype.md)<`T`>*

*Defined in [di/dependencies.ts:26](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/di/dependencies.ts#L26)*

Describes identifier of a dependency bound to a type

___
<a id="dependencyidentifiers"></a>

###  DependencyIdentifiers

**Ƭ DependencyIdentifiers**: *`object`*

*Defined in [di/dependencies.ts:40](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/di/dependencies.ts#L40)*

#### Type declaration

___
<a id="eventhandlerprovider"></a>

###  EventHandlerProvider

**Ƭ EventHandlerProvider**: *`function`*

*Defined in [events/EventHandlerProvider.ts:18](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/events/EventHandlerProvider.ts#L18)*

A function that resolves an event handler by the event type.

*__param__*: event type

*__interface__*: EventHandlerProvider

#### Type declaration
▸(type: *`string`*): [EventHandler](../interfaces/sqrs.eventhandler.md)[]

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` |

**Returns:** [EventHandler](../interfaces/sqrs.eventhandler.md)[]

___

## Variables

<a id="boundtypesymbol"></a>

### `<Const>` boundTypeSymbol

**● boundTypeSymbol**: *`unique symbol`* =  Symbol('__boundTypeSymbol__')

*Defined in [di/dependencies.ts:4](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/di/dependencies.ts#L4)*

___
<a id="commandbusid"></a>

### `<Const>` commandBusId

**● commandBusId**: *`symbol` & [BoundType](../interfaces/sqrs.boundtype.md)<[CommandBus](../interfaces/sqrs.commandbus.md)<`any`>>* =  depId<CommandBus>('CommandBus')

*Defined in [commands/CommandBus.ts:10](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/CommandBus.ts#L10)*

Dependency Identifier of CommandBus

___
<a id="commandhandlerproviderid"></a>

### `<Const>` commandHandlerProviderId

**● commandHandlerProviderId**: *`symbol` & [BoundType](../interfaces/sqrs.boundtype.md)<[CommandHandlerProvider](../interfaces/sqrs.commandhandlerprovider.md)>* =  depId<CommandHandlerProvider>('CommandHandlerProvider')

*Defined in [commands/CommandHandlerProvider.ts:11](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/CommandHandlerProvider.ts#L11)*

DependencyIdentifier of CommandHandlerProvider

___
<a id="commandvalidatorproviderid"></a>

### `<Const>` commandValidatorProviderId

**● commandValidatorProviderId**: *`symbol` & [BoundType](../interfaces/sqrs.boundtype.md)<[CommandValidatorProvider](../interfaces/sqrs.commandvalidatorprovider.md)>* =  depId<CommandValidatorProvider>('CommandValidatorProvider')

*Defined in [commands/CommandValidatorProvider.ts:11](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/CommandValidatorProvider.ts#L11)*

DependencyIdentifier of CommandValidatorProvider

___
<a id="eventbusid"></a>

### `<Const>` eventBusId

**● eventBusId**: *`symbol` & [BoundType](../interfaces/sqrs.boundtype.md)<[EventBus](../interfaces/sqrs.eventbus.md)>* =  depId<EventBus>('EventBus')

*Defined in [events/EventBus.ts:10](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/events/EventBus.ts#L10)*

Dependency Identifier for the EventBus

___
<a id="eventhandlerproviderid"></a>

### `<Const>` eventHandlerProviderId

**● eventHandlerProviderId**: *`symbol` & [BoundType](../interfaces/sqrs.boundtype.md)<`function`>* =  depId<EventHandlerProvider>('EventHandlerProvider')

*Defined in [events/EventHandlerProvider.ts:10](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/events/EventHandlerProvider.ts#L10)*

DependencyIdentifier of EventHandlerProvider

___
<a id="queryexecutorid"></a>

### `<Const>` queryExecutorId

**● queryExecutorId**: *`symbol` & [BoundType](../interfaces/sqrs.boundtype.md)<[QueryExecutor](../interfaces/sqrs.queryexecutor.md)>* =  depId<QueryExecutor>('QueryExecutor')

*Defined in [queries/QueryExecutor.ts:10](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/queries/QueryExecutor.ts#L10)*

Dependency Identifier for QueryExecutor

___
<a id="queryhandlerproviderid"></a>

### `<Const>` queryHandlerProviderId

**● queryHandlerProviderId**: *`symbol` & [BoundType](../interfaces/sqrs.boundtype.md)<[QueryHandlerProvider](../interfaces/sqrs.queryhandlerprovider.md)>* =  depId<QueryHandlerProvider>('QueryHandlerProvider')

*Defined in [queries/QueryHandlerProvider.ts:11](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/queries/QueryHandlerProvider.ts#L11)*

DependencyIdentifier of QueryHandlerProvider

___

## Functions

<a id="commandhandlerid"></a>

###  commandHandlerId

▸ **commandHandlerId**(type: *`string`*): [DependencyIdentifier](sqrs.md#dependencyidentifier)<[CommandHandler](../interfaces/sqrs.commandhandler.md)>

*Defined in [commands/CommandHandler.ts:13](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/CommandHandler.ts#L13)*

Returns reusable DependencyIdentifier for given command type identifying command handler.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  command type |

**Returns:** [DependencyIdentifier](sqrs.md#dependencyidentifier)<[CommandHandler](../interfaces/sqrs.commandhandler.md)>

___
<a id="commandvalidatorid"></a>

###  commandValidatorId

▸ **commandValidatorId**(type: *`string`*): [DependencyIdentifier](sqrs.md#dependencyidentifier)<[CommandValidator](../interfaces/sqrs.commandvalidator.md)>

*Defined in [commands/CommandValidator.ts:13](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/CommandValidator.ts#L13)*

Returns reusable DependencyIdentifier for given command type identifying command validator.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  \- |

**Returns:** [DependencyIdentifier](sqrs.md#dependencyidentifier)<[CommandValidator](../interfaces/sqrs.commandvalidator.md)>

___
<a id="containercommandhandlerproviderfactory"></a>

###  containerCommandHandlerProviderFactory

▸ **containerCommandHandlerProviderFactory**(container: *[Container](../interfaces/sqrs.container.md)*): [CommandHandlerProvider](../interfaces/sqrs.commandhandlerprovider.md)

*Defined in [commands/CommandHandlerProvider.ts:29](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/CommandHandlerProvider.ts#L29)*

Creates a function that resolves command handler from the container for a given command by it's type

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| container | [Container](../interfaces/sqrs.container.md) |  \- |

**Returns:** [CommandHandlerProvider](../interfaces/sqrs.commandhandlerprovider.md)

___
<a id="containercommandvalidatorproviderfactory"></a>

###  containerCommandValidatorProviderFactory

▸ **containerCommandValidatorProviderFactory**(container: *[Container](../interfaces/sqrs.container.md)*): [CommandValidatorProvider](../interfaces/sqrs.commandvalidatorprovider.md)

*Defined in [commands/CommandValidatorProvider.ts:29](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/commands/CommandValidatorProvider.ts#L29)*

Creates a function that resolves command validator from the container for a given command by it's type

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| container | [Container](../interfaces/sqrs.container.md) |  \- |

**Returns:** [CommandValidatorProvider](../interfaces/sqrs.commandvalidatorprovider.md)

___
<a id="containereventhandlerproviderfactory"></a>

###  containerEventHandlerProviderFactory

▸ **containerEventHandlerProviderFactory**(container: *[Container](../interfaces/sqrs.container.md)*): [EventHandlerProvider](sqrs.md#eventhandlerprovider)

*Defined in [events/EventHandlerProvider.ts:26](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/events/EventHandlerProvider.ts#L26)*

Creates a function that resolves event handler from the container for a given event by it's type

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| container | [Container](../interfaces/sqrs.container.md) |  \- |

**Returns:** [EventHandlerProvider](sqrs.md#eventhandlerprovider)

___
<a id="containerqueryhandlerproviderfactory"></a>

###  containerQueryHandlerProviderFactory

▸ **containerQueryHandlerProviderFactory**(container: *[Container](../interfaces/sqrs.container.md)*): [QueryHandlerProvider](../interfaces/sqrs.queryhandlerprovider.md)

*Defined in [queries/QueryHandlerProvider.ts:29](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/queries/QueryHandlerProvider.ts#L29)*

Creates a function that resolves query handler from the container for a given query by it's queryName

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| container | [Container](../interfaces/sqrs.container.md) |  \- |

**Returns:** [QueryHandlerProvider](../interfaces/sqrs.queryhandlerprovider.md)

___
<a id="depid"></a>

###  depId

▸ **depId**<`T`>(id: *`string`*, reuse?: *`boolean`*): [DependencyIdentifier](sqrs.md#dependencyidentifier)<`T`>

*Defined in [di/dependencies.ts:36](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/di/dependencies.ts#L36)*

Creates a symbol for given string that can be used as a dependency indentifier

*__template__*: T - type of dependency

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| id | `string` | - |  string identifier to create Symbol from |
| `Default value` reuse | `boolean` | false |

**Returns:** [DependencyIdentifier](sqrs.md#dependencyidentifier)<`T`>

___
<a id="eventhandlerid"></a>

###  eventHandlerId

▸ **eventHandlerId**(type: *`string`*): [DependencyIdentifier](sqrs.md#dependencyidentifier)<[EventHandler](../interfaces/sqrs.eventhandler.md)>

*Defined in [events/EventHandler.ts:12](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/events/EventHandler.ts#L12)*

Returns reusable DependencyIdentifier for given event type identifying event handler.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | `string` |  event type |

**Returns:** [DependencyIdentifier](sqrs.md#dependencyidentifier)<[EventHandler](../interfaces/sqrs.eventhandler.md)>

___
<a id="queryhandlerid"></a>

###  queryHandlerId

▸ **queryHandlerId**(queryName: *`string`*): `symbol` & [BoundType](../interfaces/sqrs.boundtype.md)<[QueryHandler](../interfaces/sqrs.queryhandler.md)<[Query](../interfaces/sqrs.query.md)<`string`, `unknown`>>>

*Defined in [queries/QueryHandler.ts:12](https://github.com/brainhubeu/sqrs/blob/f7042dc/packages/sqrs/src/queries/QueryHandler.ts#L12)*

Returns reusable DependencyIdentifier for given query name identifying query handler.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| queryName | `string` |  query name |

**Returns:** `symbol` & [BoundType](../interfaces/sqrs.boundtype.md)<[QueryHandler](../interfaces/sqrs.queryhandler.md)<[Query](../interfaces/sqrs.query.md)<`string`, `unknown`>>>

___

