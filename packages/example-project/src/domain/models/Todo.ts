export default class Todo {
  constructor (
    public id: string,
    public title: string,
    public isCompleted: boolean,
    public createdAt: Date
  ) {
  }
}
