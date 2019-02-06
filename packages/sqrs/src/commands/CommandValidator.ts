/**
 * @module sqrs
 */
import { depId, DependencyIdentifier } from '../di/dependencies';
import { Command } from './Command';

/**
 * Returns reusable DependencyIdentifier for given command type identifying command validator.
 *
 * @param {string} type
 * @returns {DependencyIdentifier<CommandValidator>}
 */
export function commandValidatorId (type: string): DependencyIdentifier<CommandValidator> {
  return depId<CommandValidator>(`CommandValidator<${type}>`, true);
}

/**
 * Generic command validation result
 *
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
