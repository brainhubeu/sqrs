import { CommandHandler, Dependencies, EventBus, eventBusId } from '@brainhubeu/sqrs';
import { CreateTodoCommand, TodoCommandTypes } from '../../commands/todos';
import { TodoRepository, todoRepositoryId } from '../../repositories/todoRepository';
import { todoCreatedEvent } from '../../events/todos';

export default class CreateTodoCommandHandler implements CommandHandler<CreateTodoCommand> {
  static type = TodoCommandTypes.create;
  static dependencies: Dependencies<typeof CreateTodoCommandHandler> = [
    todoRepositoryId,
    eventBusId
  ];

  constructor (
    private readonly todoRepository: TodoRepository,
    private readonly eventBus: EventBus
  ) {
  }

  async handle (command: CreateTodoCommand) {
    const { id, title } = command;

    const todo = this.todoRepository.create({
      id,
      title
    });

    await this.todoRepository.save(todo);

    this.eventBus.raise(
      todoCreatedEvent(todo)
    );
  }
}
