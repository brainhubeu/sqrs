import { CommandHandler } from '../CommandHandler';
import { DefaultCommandBus } from '../DefaultCommandBus';
import MissingCommandHandlerError from '../../errors/MissingCommandHandlerError';
import { CommandValidator, CommandValidationResult } from '../CommandValidator';

describe('DefaultCommandBus', () => {
  const setup = () => {
    const handler: jest.Mocked<CommandHandler> = {
      handle: jest.fn()
    };
    const validator: jest.Mocked<CommandValidator> = {
      validate: jest.fn()
    };
    const handlerProvider = jest.fn();
    const validatorProvider = jest.fn();
    const commandBus = new DefaultCommandBus(
      handlerProvider,
      validatorProvider
    );

    return {
      handler,
      validator,
      handlerProvider,
      validatorProvider,
      commandBus
    };
  };

  it('should throw error when handler was not found.', () => {
    const { handlerProvider, commandBus } = setup();
    handlerProvider.mockReturnValue(undefined);

    const result = commandBus.dispatch({ type: 'string' });

    // tslint:disable-next-line no-floating-promises
    expect(result).rejects.toThrowError(MissingCommandHandlerError);
  });

  it('should validate command when validator was found.', async () => {
    const { handler, handlerProvider, validator, validatorProvider, commandBus } = setup();
    const command = { type: 'string' };
    handlerProvider.mockReturnValue(handler);
    validatorProvider.mockReturnValue(validator);
    validator.validate.mockReturnValue({ isValid: true });

    await commandBus.dispatch(command);

    expect(validator.validate).toHaveBeenCalledWith(command);
  });

  it('should return result containing validation errors if command is not valid.', async () => {
    const { handler, handlerProvider, validator, validatorProvider, commandBus } = setup();
    const command = { type: 'string' };
    const validationResult: CommandValidationResult = {
      isValid: false,
      errors: [
        'Error 1',
        'Error 2'
      ]
    };
    handlerProvider.mockReturnValue(handler);
    validatorProvider.mockReturnValue(validator);
    validator.validate.mockReturnValue(validationResult);

    const result = await commandBus.dispatch(command);

    expect(result).toEqual({
      success: false,
      isValid: false,
      validationErrors: validationResult.errors
    });
  });

  it('should execute command and return success result when handler finishes successfully.', async () => {
    const { handler, handlerProvider, commandBus } = setup();
    const command = { type: 'string' };
    handlerProvider.mockReturnValue(handler);

    const result = await commandBus.dispatch(command);

    expect(result).toEqual({
      success: true,
      isValid: true
    });
  });

  it('should return result containing exception when handler throws an error.', async () => {
    const { handler, handlerProvider, commandBus } = setup();
    const command = { type: 'string' };
    handler.handle.mockRejectedValue(new Error('Runtime error'));
    handlerProvider.mockReturnValue(handler);

    const result = await commandBus.dispatch(command);

    expect(result).toEqual({
      success: false,
      isValid: true,
      executionError: new Error('Runtime error')
    });
  });
});
