import { shallowEqual } from "shallow-equal-object";

export abstract class ValueObject<T extends object> {
  protected readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined || vo.props === undefined) {
      return false;
    }
    return shallowEqual(this.props, vo.props);
  }
}
