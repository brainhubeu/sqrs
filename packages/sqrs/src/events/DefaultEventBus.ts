import { EventBus } from './EventBus';
import { Dependencies } from '../di';
import { eventHandlerProviderId, EventHandlerProvider } from './EventHandlerProvider';
import { Event } from './Event';

export class DefaultEventBus implements EventBus {
  public static dependencies: Dependencies<typeof DefaultEventBus> = [
    eventHandlerProviderId
  ];

  constructor (
    private readonly handlerProvider: EventHandlerProvider
  ) {
  }

  public raise (event: Event) {
    const handlers = this.handlerProvider(event.type) || [];

    return Promise.all(
      handlers.map(async handler => {
        try {
          await handler.handle(event);
        } catch (err) {
          return err;
        }
      })
    ).then(results => {
      const error = results.find(Boolean);
      if (error) {
        throw error;
      }
    });
  }
}
