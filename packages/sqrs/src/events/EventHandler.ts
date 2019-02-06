/**
 * @module sqrs
 */
import { Event } from './Event';
import { depId, DependencyIdentifier } from '../di';

/**
 * Returns reusable DependencyIdentifier for given event type identifying event handler.
 * @param {string} type - event type
 * @returns {DependencyIdentifier<EventHandler>}
 */
export function eventHandlerId (type: string): DependencyIdentifier<EventHandler> {
  return depId<EventHandler>(`EventHandler<${type}>`, true);
}

/**
 * Base interface that event handlers implement
 *
 * @interface CommandHandler
 * @template TCommand - type of handled event
 */
export interface EventHandler<TEvent extends Event = Event > {
  /**
   * Handles an event
   *
   * @param {TEvent} event - event to handle
   * @returns {(void | Promise<void>)} - either nothing or a Promise that resolves when event is handled
   * @memberof EventHandler
   */
  handle (event: TEvent): void | Promise<void>;
}
