export default class MissingCommandHandlerError extends Error {
  constructor (commandType: string) {
    super(`Could not find command handler for command of type ${commandType}`);
  }
}
