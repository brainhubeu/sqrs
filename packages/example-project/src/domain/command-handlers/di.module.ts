import { ContainerModule } from 'inversify';
import { WithDependencies } from '@brainhubeu/sqrs';
import { ContainerBuilder } from '@brainhubeu/sqrs-inversify';

import todos from './todos';

type CommandHandlerType = WithDependencies & { type: string };

const handlers: CommandHandlerType[] = [
  ...todos
];

const commandHandlersModule = new ContainerModule(bind => {
  const builder = new ContainerBuilder(bind);

  handlers.forEach(handler => {
    builder.registerCommandHandler(handler);
  });
});

export default commandHandlersModule;
