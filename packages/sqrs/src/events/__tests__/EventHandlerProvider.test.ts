import { Container } from '../../di';
import { eventHandlerId } from '../EventHandler';
import { containerEventHandlerProviderFactory } from '../EventHandlerProvider';

describe('EventHandlerProvider', () => {
  describe('containerEventHandlerProviderFactory', () => {
    it('should get all event handlers by id from container', () => {
      const container: jest.Mocked<Container> = {
        get: jest.fn(),
        getAll: jest.fn(),
        isBound: jest.fn()
      };
      container.getAll.mockImplementation(
        (id: Symbol) => id === eventHandlerId(eventType) ? eventHandlers : undefined
      );
      container.isBound.mockImplementation(
        (id: Symbol) => id === eventHandlerId(eventType)
      );
      const eventType = 'test';
      const eventHandlers = [
        jest.fn(),
        jest.fn()
      ];
      const provider = containerEventHandlerProviderFactory(container);
      const handler = provider(eventType);

      expect(handler).toEqual(eventHandlers);
    });
  });
});
