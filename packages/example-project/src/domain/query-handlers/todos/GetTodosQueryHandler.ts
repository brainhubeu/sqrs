import { QueryHandler, Dependencies } from 'sqrs';
import { GetTodosQuery, TodoQueryNames } from '../../queries/todos';
import { TodoRepository, todoRepositoryId } from '../../repositories/todoRepository';
import Todo from '../../models/Todo';

export default class GetTodosQueryHandler implements QueryHandler<GetTodosQuery> {
  static queryName = TodoQueryNames.GetTodos;

  static dependencies: Dependencies<typeof GetTodosQueryHandler> = [
    todoRepositoryId
  ];

  constructor (
    private readonly todoRepository: TodoRepository
  ) {
  }

  async execute (query: GetTodosQuery): Promise<Todo[]> {
    const { take, skip } = query;
    const todos = await this.todoRepository.find({
      order: {
        createdAt: 'ASC'
      },
      take,
      skip
    });

    return todos;
  }
}
