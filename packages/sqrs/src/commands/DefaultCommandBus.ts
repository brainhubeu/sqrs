/**
 * @module sqrs
 */
import { CommandBus } from './CommandBus';
import { Command } from './Command';
import { Dependencies } from '../di';
import { CommandHandlerProvider, commandHandlerProviderId } from './CommandHandlerProvider';
import MissingCommandHandlerError from '../errors/MissingCommandHandlerError';
import { CommandValidatorProvider, commandValidatorProviderId } from './CommandValidatorProvider';

/**
 * Generic interface describing result of running command
 *
 * @interface CommandResult
 * @template TValidationError
 */
export interface CommandResult<TValidationError = string> {
  success: boolean;
  isValid: boolean;
  validationErrors?: TValidationError[];
  executionError?: Error;
}

export class DefaultCommandBus implements CommandBus<CommandResult> {
  static dependencies: Dependencies<typeof DefaultCommandBus> = [
    commandHandlerProviderId,
    commandValidatorProviderId
  ];

  constructor (
    private readonly commandHandlerProvider: CommandHandlerProvider,
    private readonly commandValidatorProvider: CommandValidatorProvider
  ) {
  }

  /**
   * Dispatches a command in the same process and returns promise resolving with command result
   *
   * @param {Command} command
   * @returns {Promise<CommandResult>}
   * @memberof DefaultCommandBus
   */
  async dispatch (command: Command): Promise<CommandResult> {
    const handler = this.commandHandlerProvider(command.type);
    const validator = this.commandValidatorProvider(command.type);

    if (!handler) {
      throw new MissingCommandHandlerError(command.type);
    }

    if (validator) {
      const validationResult = await validator.validate(command);

      if (!validationResult.isValid) {
        return {
          success: false,
          isValid: false,
          validationErrors: validationResult.errors
        };
      }
    }

    try {
      await handler.handle(command);

      return {
        success: true,
        isValid: true
      };
    } catch (err) {
      return {
        success: false,
        isValid: true,
        executionError: err
      };
    }
  }
}
