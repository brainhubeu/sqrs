import { EntitySchema } from 'typeorm';
import Todo from '../../models/Todo';

const todoSchema = new EntitySchema<Todo>({
  name: 'Todo',
  target: Todo,
  columns: {
    id: {
      primary: true,
      type: String,
      nullable: false
    },
    title: {
      type: String,
      nullable: false
    },
    isCompleted: {
      type: Boolean,
      default: false,
      nullable: false
    },
    createdAt: {
      type: 'date',
      nullable: false,
      readonly: true,
      createDate: true
    }
  }
});

export default todoSchema;
