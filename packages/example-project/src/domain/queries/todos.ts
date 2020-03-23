import { Query } from '@brainhubeu/sqrs';
import Todo from '../models/Todo';

export enum TodoQueryNames {
  GetTodos = 'GetTodos'
}

export class GetTodosQuery implements Query<TodoQueryNames.GetTodos, Todo[]> {
  queryName = TodoQueryNames.GetTodos;

  constructor (
    public take: number = 25,
    public skip: number = 0
  ) {
  }
}
