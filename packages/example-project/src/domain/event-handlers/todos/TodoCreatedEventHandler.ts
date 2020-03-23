import { EventHandler, Dependencies } from '@brainhubeu/sqrs';
import { TodoCreatedEvent, TodoEventTypes } from '../../events/todos';
import { Logger, loggerId } from '../../../infrastructure/Logger';

export default class TodoCreatedEventHandler implements EventHandler<TodoCreatedEvent> {
  static type = TodoEventTypes.todoCreated;

  static dependencies: Dependencies<typeof TodoCreatedEventHandler> = [
    loggerId
  ];

  constructor (
    private logger: Logger
  ) {
  }

  handle (event: TodoCreatedEvent) {
    const { todo } = event;

    // Handle the event
    this.logger.debug(`todo ${todo.id} created at ${todo.createdAt}`);
  }
}
