import { depId } from '../di/dependencies';
import { Command } from './Command';

export const commandHandlerId = (type: string) => depId<CommandHandler>(`CommandHandler<${type}>`, true);

export interface CommandHandler<TCommand extends Command = Command> {
  handle (command: TCommand): void | Promise<void>;
}
