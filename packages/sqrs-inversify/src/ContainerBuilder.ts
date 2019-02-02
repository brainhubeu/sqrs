/// <reference types="reflect-metadata" />
import {
  DependencyIdentifier,
  Dependencies,
  WithDependencies,
  commandHandlerId,
  eventHandlerId,
  queryHandlerId
} from 'sqrs';
import { interfaces, METADATA_KEY } from 'inversify';
import { helpers } from 'inversify-vanillajs-helpers';

type CommandHandlerType = WithDependencies & { type: string };
type EventHandlerType = WithDependencies & { type: string | string[] };
type QueryHandlerType = WithDependencies & { queryName: string };

export class ContainerBuilder {
  private readonly container: {
    bind: interfaces.Bind;
  };

  constructor (bind: interfaces.Container | interfaces.Bind) {
    this.container = typeof bind === 'object' ? bind : { bind };
  }

  public registerType <TRegister, TType, T> (
    identifier: DependencyIdentifier<TRegister>,
    type: TType & { dependencies: Dependencies<TType> } & interfaces.Newable<T>
  ) {
    if (!(Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, type))) {
      helpers.annotate(type, type.dependencies);
    }

    return this.container.bind(identifier).to(type);
  }

  public registerCommandHandler (handler: CommandHandlerType) {
    return this.registerType(commandHandlerId(handler.type), handler);
  }

  public registerEventHandler (handler: EventHandlerType) {
    const eventTypes = typeof handler.type === 'string'
      ? [handler.type]
      : handler.type;

    return eventTypes.map(eventType => {
      this.registerType(eventHandlerId(eventType), handler);
    });
  }

  public registerQueryHandler (handler: QueryHandlerType) {
    return this.registerType(queryHandlerId(handler.queryName), handler);
  }
}
