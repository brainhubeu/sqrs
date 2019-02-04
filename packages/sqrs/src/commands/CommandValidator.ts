import { depId } from '../di/dependencies';
import { Command } from './Command';

export const commandValidatorId = (type: string) => depId<CommandValidator>(`CommandValidator<${type}>`, true);

/**
 * Generic command validation result
 *
 * @export
 * @interface CommandValidationResult
 * @template TError - type of validation error, default string
 */
export interface CommandValidationResult<TError = string> {
  /**
   * Flag that indicates if the command was validated successfully
   *
   * @type {boolean}
   * @memberof CommandValidationResult
   */
  isValid: boolean;
  /**
   * Array of validation errors
   *
   * @type {TError[]}
   * @memberof CommandValidationResult
   */
  errors?: TError[];
}

/**
 * Base interface that command validators implement
 *
 * @export
 * @interface CommandValidator
 * @template TCommand - type of command that validator can validate
 */
export interface CommandValidator<TCommand extends Command = Command> {
  /**
   * Validates command
   *
   * @param {TCommand} command - command to validate
   * @returns {(CommandValidationResult | Promise<CommandValidationResult>)}
   * @memberof CommandValidator
   */
  validate (command: TCommand): CommandValidationResult | Promise<CommandValidationResult>;
}
