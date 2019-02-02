import { Event } from './Event';
import { depId } from '../di';

export const eventHandlerId = (type: string) => depId<EventHandler>(`EventHandler<${type}>`, true);

export interface EventHandler<TEvent extends Event = Event > {
  handle (event: TEvent): void | Promise<void>;
}
