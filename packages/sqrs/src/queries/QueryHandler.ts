import { Query } from './query';
import { depId } from '../di';

export const queryHandlerId = (queryName: string) => depId<QueryHandler>(`QueryHandler<${queryName}>`, true);

export interface QueryHandler<TQuery extends Query<string, unknown> = Query<string, unknown>> {
  execute (query: TQuery): TQuery extends Query<string, infer TResult> ? Promise<TResult> : never;
}
