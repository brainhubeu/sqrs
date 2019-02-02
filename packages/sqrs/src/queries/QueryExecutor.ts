import { depId } from '../di';
import { Query } from './Query';

export const queryExecutorId = depId<QueryExecutor>('QueryExecutor');

export interface QueryExecutor {
  execute <T> (query: Query<string, T>): Promise<T>;
}
