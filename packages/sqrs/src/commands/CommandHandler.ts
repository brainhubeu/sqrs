/**
 * @module sqrs
 */
import { depId, DependencyIdentifier } from '../di/dependencies';
import { Command } from './Command';

/**
 * Returns reusable DependencyIdentifier for given command type identifying command handler.
 *
 * @param {string} type - command type
 * @returns {DependencyIdentifier<CommandHandler>}
 */
export function commandHandlerId (type: string): DependencyIdentifier<CommandHandler> {
  return depId<CommandHandler>(`CommandHandler<${type}>`, true);
}

/**
 * Base interface that command handlers implement
 *
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
