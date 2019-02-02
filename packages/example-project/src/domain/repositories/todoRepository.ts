import { Repository } from 'typeorm';
import { depId } from 'sqrs';
import Todo from '../models/Todo';

export const todoRepositoryId = depId<TodoRepository>('TodoRepository');

export interface TodoRepository extends Repository<Todo> {}
