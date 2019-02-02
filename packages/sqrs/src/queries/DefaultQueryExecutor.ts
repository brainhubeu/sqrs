import { QueryExecutor } from './QueryExecutor';
import { Dependencies } from '../di';
import { queryHandlerProviderId, QueryHandlerProvider } from './QueryHandlerProvider';
import { Query } from './Query';
import MissingQueryHandlerError from '../errors/MissingQueryHandlerError';

export class DefaultQueryExecutor implements QueryExecutor {
  public static dependencies: Dependencies<typeof DefaultQueryExecutor> = [
    queryHandlerProviderId
  ];

  constructor (
    private readonly queryHandlerProvider: QueryHandlerProvider
  ) {
  }

  public async execute <T> (query: Query<string, T>): Promise<T> {
    const handler = this.queryHandlerProvider<string, T>(query.queryName);

    if (!handler) {
      throw new MissingQueryHandlerError(query.queryName);
    }

    return handler.execute(query);
  }
}
