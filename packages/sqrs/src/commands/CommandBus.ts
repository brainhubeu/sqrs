import { depId } from '../di';
import { Command } from './Command';

export const commandBusId = depId<CommandBus>('CommandBus');

export interface CommandBus<T = any> {
  dispatch (command: Command): Promise<T>;
}
