import {
  depId,
  Dependencies,
  CommandBus,
  commandBusId,
  QueryExecutor,
  queryExecutorId
} from 'sqrs';
import { CommandResult } from '../../../sqrs/dist';

export const routeContextId = depId<RouteContext>('RouteContext');

export class RouteContext {
  static dependencies: Dependencies<typeof RouteContext> = [
    commandBusId,
    queryExecutorId
  ];

  constructor (
    public readonly commandBus: CommandBus<CommandResult>,
    public readonly queryExecutor: QueryExecutor
  ) {
  }
}
