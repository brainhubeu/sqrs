/**
 * @module sqrs
 */
import { EventHandler, eventHandlerId } from './EventHandler';
import { depId, Container } from '../di';

/**
 * DependencyIdentifier of EventHandlerProvider
 */
export const eventHandlerProviderId = depId<EventHandlerProvider>('EventHandlerProvider');

/**
 * A function that resolves an event handler by the event type.
 *
 * @param {string} type - event type
 * @interface EventHandlerProvider
 */
export type EventHandlerProvider = (type: string) => EventHandler[];

/**
 * Creates a function that resolves event handler from the container for a given event by it's type
 *
 * @param {Container} container
 * @returns {EventHandlerProvider}
 */
export function containerEventHandlerProviderFactory (container: Container): EventHandlerProvider {
  return (type) => {
    const id = eventHandlerId(type);
    return container.getAll(id);
  };
}
