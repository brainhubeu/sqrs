/**
 * @module sqrs
 */
import { depId, Container } from '../di';
import { QueryHandler, queryHandlerId } from './QueryHandler';
import { Query } from './Query';

/**
 * DependencyIdentifier of QueryHandlerProvider
 */
export const queryHandlerProviderId = depId<QueryHandlerProvider>('QueryHandlerProvider');

/**
 * A function that resolves a query handler by the query name.
 *
 * @param {string} queryName - query name
 * @interface QueryHandlerProvider
 */
export interface QueryHandlerProvider {
  <TName extends string, TResult>(queryName: TName): QueryHandler<Query<TName, TResult>> | undefined;
}

/**
 * Creates a function that resolves query handler from the container for a given query by it's queryName
 *
 * @param {Container} container
 * @returns {EventHandlerProvider}
 */
export function containerQueryHandlerProviderFactory (container: Container): QueryHandlerProvider {
  return (queryName) => {
    const id = queryHandlerId(queryName);
    return container.isBound(id) ? container.get(id) : undefined;
  };
}
