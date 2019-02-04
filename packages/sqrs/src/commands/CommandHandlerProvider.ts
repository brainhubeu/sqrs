import { depId, Container } from '../di';
import { CommandHandler, commandHandlerId } from './CommandHandler';
import { Command } from './Command';

export const commandHandlerProviderId = depId<CommandHandlerProvider>('CommandHandlerProvider');

export interface CommandHandlerProvider {
  <T extends string = string>(type: T): CommandHandler<Command<T>> | undefined;
}

/**
 * Creates a function that resolves command handler from the container for a given command by it's type
 *
 * @export
 * @param {Container} container
 * @returns {CommandHandlerProvider}
 */
export function containerCommandHandlerProviderFactory (container: Container): CommandHandlerProvider {
  return (type) => {
    const id = commandHandlerId(type);
    return container.isBound(id) ? container.get(id) : undefined;
  };
}
