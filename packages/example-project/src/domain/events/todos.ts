import { Event } from '@brainhubeu/sqrs';
import Todo from '../models/Todo';

export enum TodoEventTypes {
  todoCreated = 'todos/TODO_CREATED'
}

export interface TodoCreatedEvent extends Event<TodoEventTypes.todoCreated> {
  todo: Todo;
}

export const todoCreatedEvent = (todo: Todo): TodoCreatedEvent => ({
  type: TodoEventTypes.todoCreated,
  todo
});
