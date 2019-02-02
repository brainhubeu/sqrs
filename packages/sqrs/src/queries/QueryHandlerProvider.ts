import { depId, Container } from '../di';
import { QueryHandler, queryHandlerId } from './QueryHandler';
import { Query } from './Query';

export const queryHandlerProviderId = depId<QueryHandlerProvider>('QueryHandlerProvider');

export interface QueryHandlerProvider {
  <TName extends string, TResult>(queryName: TName): QueryHandler<Query<TName, TResult>> | undefined;
}

export const containerQueryHandlerProviderFactory = (container: Container): QueryHandlerProvider => {
  return (queryName) => {
    const id = queryHandlerId(queryName);
    return container.isBound(id) ? container.get(id) : undefined;
  };
};
