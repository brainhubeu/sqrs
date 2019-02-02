import status from 'http-status-codes';
import { Route, HTTPMethod } from './Route';
import { createTodoCommand } from '../domain/commands/todos';
import { GetTodosQuery } from '../domain/queries/todos';

const routes: Route[] = [
  {
    path: '/todos',
    method: HTTPMethod.GET,
    handle (req, res, context) {
      const { queryExecutor } = context;
      const { skip, take } = req.params;

      const query = new GetTodosQuery(take, skip);

      queryExecutor.execute(query)
        .then(todos =>
          res.json(todos)
        )
        .catch(() => {
          res.sendStatus(status.INTERNAL_SERVER_ERROR);
        });
    }
  },
  {
    path: '/todos',
    method: HTTPMethod.POST,
    handle (req, res, context) {
      const { commandBus } = context;
      const { id, title } = req.body;
      const command = createTodoCommand(id, title);

      commandBus.dispatch(command)
        .then(result => {
          res
            .status(status.CREATED)
            .json(result);
        })
        .catch(() => {
          res
            .sendStatus(status.INTERNAL_SERVER_ERROR);
        });
    }
  }
];

export default routes;
