import { Container } from '../../di';
import { containerCommandHandlerProviderFactory } from '../CommandHandlerProvider';
import { commandHandlerId } from '../CommandHandler';

describe('CommandHandlerProvider', () => {
  describe('containerCommandHandlerProviderFactory', () => {
    it('should get command handler by id from container', () => {
      const container: jest.Mocked<Container> = {
        get: jest.fn(),
        getAll: jest.fn(),
        isBound: jest.fn()
      };
      const commandType = 'test';
      const commandHandler = jest.fn();
      container.get.mockImplementation(
        (id: Symbol) => id === commandHandlerId(commandType) ? commandHandler : undefined
      );
      container.isBound.mockImplementation(
        (id: Symbol) => id === commandHandlerId(commandType)
      );
      const provider = containerCommandHandlerProviderFactory(container);

      const handler = provider(commandType);

      expect(handler).toEqual(commandHandler);
    });
  });
});
