import { ValueObject } from "../value-object";

import { NegativeCoordinatesError } from "./not-positive-number.error";

interface PositionProps {
  x: number;
  y: number;
}

export class Position extends ValueObject<PositionProps> {
  get x(): number {
    return this.props.x;
  }
  get y(): number {
    return this.props.y;
  }

  private constructor(props: PositionProps) {
    super(props);
  }

  public static create({ x, y }: PositionProps): Position {
    if (x < 0 || y < 0) {
      throw new NegativeCoordinatesError();
    }
    return new Position({ x, y });
  }
}
