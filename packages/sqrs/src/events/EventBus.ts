/**
 * @module sqrs
 */
import { Event } from './Event';
import { depId } from '../di';

/**
 * Dependency Identifier for the EventBus
 */
export const eventBusId = depId<EventBus>('EventBus');

/**
 * Interface for event bus that allows raising events that will be sent to appropriate handlers
 *
 * @interface EventBus
 */
export interface EventBus {
  /**
   * Raises event and sends it to appropriate handlers
   *
   * @param {Event} event - event to handle
   * @memberof EventBus
   */
  raise (event: Event): void;
}
