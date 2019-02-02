import { depId, Container } from '../di';
import { Command } from './Command';
import { CommandValidator, commandValidatorId } from './CommandValidator';

export const commandValidatorProviderId = depId<CommandValidatorProvider>('CommandValidatorProvider');

export interface CommandValidatorProvider {
  <T extends string = string>(type: T): CommandValidator<Command<T>> | undefined;
}

export const containerCommandValidatorProviderFactory = (container: Container): CommandValidatorProvider => {
  return (type) => {
    const id = commandValidatorId(type);
    return container.isBound(id) ? container.get(id) : undefined;
  };
};
