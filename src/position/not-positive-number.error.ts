export class NegativeCoordinatesError extends Error {
  constructor() {
    super("Coordinates must be positive numbers.");
  }
}
