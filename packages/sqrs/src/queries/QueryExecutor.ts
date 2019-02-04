import { depId } from '../di';
import { Query } from './Query';

export const queryExecutorId = depId<QueryExecutor>('QueryExecutor');

/**
 * Interface for query executor that allows executing queries
 * by dispatching them to appropriate query handlers
 *
 * @export
 * @interface QueryExecutor
 */
export interface QueryExecutor {
  /**
   * Executes a given query by dispatching it to a query handler
   *
   * @template T
   * @param {Query<string, T>} query - query to execute
   * @returns {Promise<T>} - query results
   * @memberof QueryExecutor
   */
  execute <T> (query: Query<string, T>): Promise<T>;
}
