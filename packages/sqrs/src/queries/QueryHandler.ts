import { Query } from './query';
import { depId } from '../di';

export const queryHandlerId = (queryName: string) => depId<QueryHandler>(`QueryHandler<${queryName}>`, true);

/**
 * Base interface that query handlers implement
 *
 * @export
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
