import { ContainerModule } from 'inversify';
import { Connection } from 'typeorm';
import { todoRepositoryId, TodoRepository } from './todoRepository';
import { connectionId } from './connection';
import todoSchema from './schemas/todo';

const repositoryModule = new ContainerModule(bind => {
  bind(todoRepositoryId).toDynamicValue((context): TodoRepository => {
    const connection = context.container.get<Connection>(connectionId);

    return connection.getRepository(todoSchema);
  }).inRequestScope();
});

export default repositoryModule;
