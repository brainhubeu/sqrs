import { Event } from './Event';
import { depId } from '../di';

export const eventHandlerId = (type: string) => depId<EventHandler>(`EventHandler<${type}>`, true);

/**
 * Base interface that event handlers implement
 *
 * @export
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
