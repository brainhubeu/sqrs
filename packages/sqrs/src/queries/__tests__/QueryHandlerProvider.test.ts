import { Container } from '../../di';
import { queryHandlerId } from '../QueryHandler';
import { containerQueryHandlerProviderFactory } from '../QueryHandlerProvider';

describe('QueryHandlerProvider', () => {
  describe('containerQueryHandlerProviderFactory', () => {
    it('should get query handler by id from container', () => {
      const container: jest.Mocked<Container> = {
        get: jest.fn(),
        getAll: jest.fn(),
        isBound: jest.fn()
      };
      const queryName = 'test';
      const queryHandler = jest.fn();
      container.get.mockImplementation(
        (id: Symbol) => id === queryHandlerId(queryName) ? queryHandler : undefined
      );
      container.isBound.mockImplementation(
        (id: Symbol) => id === queryHandlerId(queryName)
      );
      const provider = containerQueryHandlerProviderFactory(container);
      const handler = provider(queryName);

      expect(handler).toEqual(queryHandler);
    });
  });
});
