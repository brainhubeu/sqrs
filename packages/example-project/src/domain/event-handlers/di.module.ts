import { ContainerModule } from 'inversify';
import { ContainerBuilder } from 'sqrs-inversify';
import { WithDependencies } from 'sqrs';

import todos from './todos';

type EventHandlerType = WithDependencies & { type: string | string[] };

const handlers: EventHandlerType[] = [
  ...todos
];

const eventHandlersModule = new ContainerModule(bind => {
  const builder = new ContainerBuilder(bind);

  handlers.forEach(handler => {
    builder.registerEventHandler(handler);
  });
});

export default eventHandlersModule;
