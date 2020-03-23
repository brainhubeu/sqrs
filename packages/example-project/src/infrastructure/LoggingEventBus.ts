import {
  Dependencies,
  EventBus,
  eventHandlerProviderId,
  DefaultEventBus,
  EventHandlerProvider,
  Event
} from '@brainhubeu/sqrs';
import { Logger, loggerId } from './Logger';

export default class LoggingEventBus implements EventBus {
  static dependencies: Dependencies<typeof LoggingEventBus> = [
    loggerId,
    eventHandlerProviderId
  ];

  private defaultEventBus: DefaultEventBus;

  constructor (
    private readonly logger: Logger,
    eventHandlerProvider: EventHandlerProvider
  ) {
    this.defaultEventBus = new DefaultEventBus(eventHandlerProvider);
  }

  async raise (event: Event) {
    try {
      this.logger.debug(`EventBus - ${event.type} - event raised`);
      this.logger.debug(event);
      const result = await this.defaultEventBus.raise(event);

      return result;
    } catch (error) {
      this.logger.error(`EventBus - ${event.type} - handler failed`);
      this.logger.error(error);
      throw error;
    }
  }
}
