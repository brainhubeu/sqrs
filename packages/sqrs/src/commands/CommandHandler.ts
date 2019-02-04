import { depId } from '../di/dependencies';
import { Command } from './Command';

export const commandHandlerId = (type: string) => depId<CommandHandler>(`CommandHandler<${type}>`, true);

/**
 * Base interface that command handlers implement
 *
 * @export
 * @interface CommandHandler
 * @template TCommand - type of handled command
 */
export interface CommandHandler<TCommand extends Command = Command> {
  /**
   * Handles dispatched command
   *
   * @param {TCommand} command - command to handle
   * @returns {(void | Promise<void>)} - either nothing or a Promise that resolves when command is handled
   * @memberof CommandHandler
   */
  handle (command: TCommand): void | Promise<void>;
}
