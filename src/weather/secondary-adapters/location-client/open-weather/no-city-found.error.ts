export class NoCityFoundError extends Error {
  constructor() {
    super("No city found.");
  }
}
