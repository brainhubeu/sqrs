import { ContainerModule } from 'inversify';
import { WithDependencies } from 'sqrs';
import { ContainerBuilder } from 'sqrs-inversify';

import todoQueryHandlers from './todos';

type QueryHandlerType = WithDependencies & { queryName: string };

const handlers: QueryHandlerType[] = [
  ...todoQueryHandlers
];

const queryHandlersModule = new ContainerModule(bind => {
  const builder = new ContainerBuilder(bind);

  handlers.forEach(handler =>
    builder.registerQueryHandler(handler)
  );
});

export default queryHandlersModule;
