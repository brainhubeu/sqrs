import { EventHandler } from '../EventHandler';
import { DefaultEventBus } from '../DefaultEventBus';

describe('DefaultEventBus', () => {
  const setup = () => {
    const handler: jest.Mocked<EventHandler> = {
      handle: jest.fn()
    };
    const handlerProvider = jest.fn();
    const eventBus = new DefaultEventBus(handlerProvider);

    return {
      handler,
      handlerProvider,
      eventBus
    };
  };

  it('should do nothing when handler was not found.', async () => {
    const { handlerProvider, eventBus } = setup();
    handlerProvider.mockReturnValue(undefined);

    const result = await eventBus.raise({ type: 'string' });

    expect(result).toEqual(undefined);
  });

  it('should execute all event handlers.', async () => {
    const { handlerProvider, eventBus } = setup();
    const handlers: jest.Mocked<EventHandler>[] = [
      { handle: jest.fn() },
      { handle: jest.fn() }
    ];
    const event = { type: 'string' };
    handlerProvider.mockReturnValue(handlers);

    await eventBus.raise(event);

    for (const handler of handlers) {
      expect(handler.handle).toHaveBeenCalledWith(event);
    }
  });

  it('should still execute all handlers if one fails.', async () => {
    const { handlerProvider, eventBus } = setup();
    const handlers: jest.Mocked<EventHandler>[] = [
      { handle: jest.fn() },
      { handle: jest.fn() }
    ];
    const firstHandlerBody = jest.fn();
    handlers[0].handle.mockImplementation(() => new Promise(resolve => {
      setTimeout(() => {
        firstHandlerBody();
        resolve();
      }, 10);
    }));
    handlers[1].handle.mockImplementation(() => new Promise((_, reject) => {
      reject(new Error('Failed'));
    }));
    const event = { type: 'string' };
    handlerProvider.mockReturnValue(handlers);

    try {
      await eventBus.raise(event);
    } catch (err) {
      // Ingored
    }

    expect(firstHandlerBody).toHaveBeenCalled();
  });

  it('should reject with error of first event handler that failed.', async () => {
    const { handlerProvider, eventBus } = setup();
    const handlers: jest.Mocked<EventHandler>[] = [
      { handle: jest.fn() },
      { handle: jest.fn() }
    ];
    handlers[0].handle.mockImplementation(() => {
      throw new Error('Handler 0 failed');
    });
    handlers[1].handle.mockImplementation(() => {
      throw new Error('Handler 1 failed');
    });
    const event = { type: 'string' };
    handlerProvider.mockReturnValue(handlers);

    const result = eventBus.raise(event);

    // tslint:disable-next-line no-floating-promises
    expect(result).rejects.toEqual(new Error('Handler 0 failed'));
  });
});
