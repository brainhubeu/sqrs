import {
  Dependencies,
  QueryExecutor,
  queryHandlerProviderId,
  DefaultQueryExecutor,
  QueryHandlerProvider,
  Query
} from 'sqrs';
import { Logger, loggerId } from './Logger';

export default class LoggingQueryExecutor implements QueryExecutor {
  static dependencies: Dependencies<typeof LoggingQueryExecutor> = [
    loggerId,
    queryHandlerProviderId
  ];

  private defaultQueryExecutor: DefaultQueryExecutor;

  constructor (
    private readonly logger: Logger,
    queryHandlerProvider: QueryHandlerProvider
  ) {
    this.defaultQueryExecutor = new DefaultQueryExecutor(queryHandlerProvider);
  }

  async execute <TResult> (query: Query<string, TResult>): Promise<TResult> {
    try {
      this.logger.debug(`QueryExecutor - ${query.queryName} - query executing`);
      this.logger.debug(query);
      const result = await this.defaultQueryExecutor.execute(query);

      return result;
    } catch (error) {
      this.logger.error(`QueryExecutor - ${query.queryName} - handler failed`);
      this.logger.error(error);
      throw error;
    }
  }
}
