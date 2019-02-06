/**
 * @module sqrs
 */
import { depId, Container } from '../di';
import { CommandHandler, commandHandlerId } from './CommandHandler';
import { Command } from './Command';

/**
 * DependencyIdentifier of CommandHandlerProvider
 */
export const commandHandlerProviderId = depId<CommandHandlerProvider>('CommandHandlerProvider');

/**
 * A function that resolves a command handler by the command type.
 *
 * @param {string} type - command type
 * @interface CommandHandlerProvider
 */
export interface CommandHandlerProvider {
  <T extends string = string>(type: T): CommandHandler<Command<T>> | undefined;
}

/**
 * Creates a function that resolves command handler from the container for a given command by it's type
 *
 * @param {Container} container
 * @returns {CommandHandlerProvider}
 */
export function containerCommandHandlerProviderFactory (container: Container): CommandHandlerProvider {
  return (type) => {
    const id = commandHandlerId(type);
    return container.isBound(id) ? container.get(id) : undefined;
  };
}
