import { Event } from './Event';
import { depId } from '../di';

export const eventBusId = depId<EventBus>('EventBus');

export interface EventBus {
  raise (event: Event): void;
}
