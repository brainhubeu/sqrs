import { Command } from '@brainhubeu/sqrs';

export enum TodoCommandTypes {
  create = 'todos/CREATE'
}

export interface CreateTodoCommand extends Command<TodoCommandTypes.create> {
  id: string;
  title: string;
}

export const createTodoCommand = (id: string, title: string): CreateTodoCommand => ({
  type: TodoCommandTypes.create,
  id,
  title
});
