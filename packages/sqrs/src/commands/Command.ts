export interface Command<T extends string = string> {
  type: T;
}
