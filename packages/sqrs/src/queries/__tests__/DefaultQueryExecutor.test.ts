import { QueryHandler } from '../QueryHandler';
import { DefaultQueryExecutor } from '../DefaultQueryExecutor';
import MissingQueryHandlerError from '../../errors/MissingQueryHandlerError';

describe('DefaultQueryExecutor', () => {
  const setup = () => {
    const handler: jest.Mocked<QueryHandler> = {
      execute: jest.fn()
    };
    const handlerProvider = jest.fn();
    const queryExecutor = new DefaultQueryExecutor(handlerProvider);

    return {
      handler,
      handlerProvider,
      queryExecutor
    };
  };

  it('should throw error when handler was not found.', () => {
    const { handlerProvider, queryExecutor } = setup();
    handlerProvider.mockReturnValue(undefined);

    const result = queryExecutor.execute({ queryName: 'test' });

    // tslint:disable-next-line no-floating-promises
    expect(result).rejects.toThrowError(MissingQueryHandlerError);
  });

  it('should execute query and return result.', async () => {
    const { handler, handlerProvider, queryExecutor } = setup();
    const query = { queryName: 'string' };
    handler.execute.mockReturnValue('query-result');
    handlerProvider.mockReturnValue(handler);

    const result = await queryExecutor.execute(query);

    expect(result).toEqual('query-result');
  });
});
