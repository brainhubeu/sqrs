import { EventHandler, eventHandlerId } from './EventHandler';
import { depId, Container } from '../di';

export const eventHandlerProviderId = depId<EventHandlerProvider>('EventHandlerProvider');

export type EventHandlerProvider = (type: string) => EventHandler[];

/**
 * Creates a function that resolves event handler from the container for a given event by it's type
 *
 * @export
 * @param {Container} container
 * @returns {EventHandlerProvider}
 */
export function containerEventHandlerProviderFactory (container: Container): EventHandlerProvider {
  return (type) => {
    const id = eventHandlerId(type);
    return container.getAll(id);
  };
}
