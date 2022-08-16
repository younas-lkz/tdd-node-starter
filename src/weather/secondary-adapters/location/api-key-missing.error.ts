export class ApiKeyMissingError extends Error {
  constructor() {
    super("Api key is missing.");
  }
}
