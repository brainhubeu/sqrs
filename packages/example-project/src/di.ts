import { Container } from 'inversify';
import { queryExecutorId, commandBusId, eventBusId } from '@brainhubeu/sqrs';
import { SQRSModule, ContainerBuilder } from '@brainhubeu/sqrs-inversify';
import { createConnection } from 'typeorm';

import LoggingQueryExecutor from './infrastructure/LoggingQueryExecutor';
import LoggingCommandBus from './infrastructure/LoggingCommandBus';
import LoggingEventBus from './infrastructure/LoggingEventBus';
import ConsoleLogger, { loggerId } from './infrastructure/Logger';
import { RouteContext, routeContextId } from './routes/RouteContext';
import { connectionId } from './domain/repositories/connection';
import { Config } from './config';
import commandHandlersModule from './domain/command-handlers/di.module';
import queryHandlersModule from './domain/query-handlers/di.module';
import repositoryModule from './domain/repositories/di.module';
import eventHandlersModule from './domain/event-handlers/di.module';
import commandValidatorsModule from './domain/command-validators/di.module';

const createContainer = async (config: Config) => {
  const container = new Container();
  const builder = new ContainerBuilder(container);

  const connection = await createConnection(config.db);
  container.bind(connectionId).toConstantValue(connection);

  container.load(SQRSModule);
  container.load(commandHandlersModule);
  container.load(commandValidatorsModule);
  container.load(queryHandlersModule);
  container.load(repositoryModule);
  container.load(eventHandlersModule);

  container.bind(loggerId).toConstantValue(new ConsoleLogger());

  container.unbind(commandBusId);
  builder.registerType(commandBusId, LoggingCommandBus);

  container.unbind(eventBusId);
  builder.registerType(eventBusId, LoggingEventBus);

  container.unbind(queryExecutorId);
  builder.registerType(queryExecutorId, LoggingQueryExecutor);

  builder.registerType(routeContextId, RouteContext);

  return container;
};

export default createContainer;
