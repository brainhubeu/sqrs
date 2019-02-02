import { depId } from '../di/dependencies';
import { Command } from './Command';

export const commandValidatorId = (type: string) => depId<CommandValidator>(`CommandValidator<${type}>`, true);

export interface CommandValidationResult<TError = string> {
  isValid: boolean;
  errors?: TError[];
}

export interface CommandValidator<TCommand extends Command = Command> {
  validate (command: TCommand): CommandValidationResult | Promise<CommandValidationResult>;
}
