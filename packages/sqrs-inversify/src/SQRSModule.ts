import {
  eventHandlerProviderId,
  containerEventHandlerProviderFactory,
  commandHandlerProviderId,
  containerCommandHandlerProviderFactory,
  queryHandlerProviderId,
  containerQueryHandlerProviderFactory,
  eventBusId,
  commandBusId,
  DefaultCommandBus,
  queryExecutorId,
  DefaultQueryExecutor,
  DefaultEventBus,
  commandValidatorProviderId,
  containerCommandValidatorProviderFactory
} from '@brainhubeu/sqrs';
import { ContainerModule } from 'inversify';
import { ContainerBuilder } from './ContainerBuilder';

export const SQRSModule = new ContainerModule((bind) => {
  const builder = new ContainerBuilder(bind);

  bind(commandHandlerProviderId).toFactory(c => containerCommandHandlerProviderFactory(c.container));
  bind(commandValidatorProviderId).toFactory(c => containerCommandValidatorProviderFactory(c.container));
  builder.registerType(commandBusId, DefaultCommandBus);

  bind(eventHandlerProviderId).toFactory(c => containerEventHandlerProviderFactory(c.container));
  builder.registerType(eventBusId, DefaultEventBus);

  bind(queryHandlerProviderId).toFactory(c => containerQueryHandlerProviderFactory(c.container));
  builder.registerType(queryExecutorId, DefaultQueryExecutor);
});
