/**
 * @module sqrs
 */
import { Query } from './Query';
import { depId } from '../di';

/**
 * Returns reusable DependencyIdentifier for given query name identifying query handler.
 * @param {string} queryName - query name
 * @returns {DependencyIdentifier<QueryHandler>}
 */
export function queryHandlerId (queryName: string) {
  return depId<QueryHandler>(`QueryHandler<${queryName}>`, true);
}

/**
 * Base interface that query handlers implement
 *
 * @interface QueryHandler
 * @template TQuery - type of handled query
 */
export interface QueryHandler<TQuery extends Query<string, unknown> = Query<string, unknown>> {
  /**
   * Executes a query returning results
   *
   * @param {TQuery} query
   * @returns {TQuery extends Query<string, infer TResult> ? Promise<TResult> : never}
   * @memberof QueryHandler
   */
  execute (query: TQuery): TQuery extends Query<string, infer TResult> ? Promise<TResult> : never;
}
