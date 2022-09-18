export class NegativeNotAllowed extends Error {
  constructor(negatives: number[]) {
    super(`negatives not allowed: ${negatives}`);
  }
}
