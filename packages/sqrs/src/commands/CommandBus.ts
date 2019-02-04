import { depId } from '../di';
import { Command } from './Command';

export const commandBusId = depId<CommandBus>('CommandBus');

/**
 * Interface for command bus that allows dispatching commands to appropriate handlers
 *
 * @export
 * @interface CommandBus
 * @template T - type of result returned after dispatching a command
 */
export interface CommandBus<T = any> {
  /**
   * Dispatches a command to appropriate command handler
   *
   * @param {Command} command - command to dispatch
   * @returns {Promise<T>} result of dispatching
   * @memberof CommandBus
   */
  dispatch (command: Command): Promise<T>;
}
