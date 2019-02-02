import * as yup from 'yup';

import createCommandSchemaValidator from './schemaValidator';
import { CreateTodoCommand } from '../commands/todos';

export const createTodoCommandValidator = createCommandSchemaValidator<CreateTodoCommand>({
  id: yup.string().required(),
  title: yup.string().required().max(100)
});
