import { Container } from 'inversify';
import {
  DefaultCommandBus,
  commandBusId,
  DefaultEventBus,
  eventBusId,
  DefaultQueryExecutor,
  queryExecutorId,
  commandHandlerProviderId,
  commandValidatorProviderId,
  queryHandlerProviderId,
  eventHandlerProviderId
} from '@brainhubeu/sqrs';
import { SQRSModule } from '../SQRSModule';

describe('SQRSModule', () => {
  it.each([
    [commandBusId, DefaultCommandBus],
    [eventBusId, DefaultEventBus],
    [queryExecutorId, DefaultQueryExecutor],
    [commandHandlerProviderId, undefined],
    [commandValidatorProviderId, undefined],
    [eventHandlerProviderId, undefined],
    [queryHandlerProviderId, undefined]
  ])('should register %s', (id, type) => {
    const container = new Container();
    container.load(SQRSModule);

    const resolved = container.get(id);

    if (type) {
      expect(resolved).toBeInstanceOf(type);
    } else {
      expect(resolved).toBeDefined();
    }
  });
});
