import { ContainerModule } from 'inversify';
import { TodoCommandTypes } from '../commands/todos';
import { createTodoCommandValidator } from './todos';
import { CommandValidator, commandValidatorId } from 'sqrs';

const validators: { [key: string]: CommandValidator } = {
  [TodoCommandTypes.create]: createTodoCommandValidator
};

const commandValidatorsModule = new ContainerModule(bind => {
  Object.keys(validators)
    .forEach(type => {
      const validator = validators[type];

      bind(commandValidatorId(type)).toConstantValue(validator);
    });
});

export default commandValidatorsModule;
