import { CommandValidator, Command, CommandValidationResult } from 'sqrs';
import * as yup from 'yup';
import { Omit } from 'utility-types';

const createCommandSchemaValidator = <T extends Command<string>>(
  schema: yup.ObjectSchemaDefinition<Omit<T, 'type'>>
): CommandValidator<T> => {
  return {
    async validate (command: T): Promise<CommandValidationResult> {
      try {
        await yup.object(schema).validate(command, { abortEarly: false, strict: true });

        return {
          isValid: true
        };
      } catch (err) {
        if (err.name !== 'ValidationError') {
          throw err;
        }

        let validationError = err as yup.ValidationError;
        return {
          isValid: false,
          errors: validationError.errors
        };
      }
    }
  };
};

export default createCommandSchemaValidator;
