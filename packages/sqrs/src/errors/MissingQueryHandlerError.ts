export default class MissingQueryHandlerError extends Error {
  constructor (queryName: string) {
    super(`Could not find query handler for query of name ${queryName}`);
  }
}
