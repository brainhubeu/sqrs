import { EventHandler, eventHandlerId } from './EventHandler';
import { depId, Container } from '../di';

export const eventHandlerProviderId = depId<EventHandlerProvider>('EventHandlerProvider');

export type EventHandlerProvider = (type: string) => EventHandler[];

export const containerEventHandlerProviderFactory = (container: Container): EventHandlerProvider => {
  return (type) => {
    const id = eventHandlerId(type);
    return container.getAll(id);
  };
};
