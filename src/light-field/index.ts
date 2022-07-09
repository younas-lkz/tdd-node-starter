import { Position } from "../position";

export class LightField {
  private lightField: LightState[][] = [];

  constructor(
    private readonly fieldLengthX: number,
    private readonly fieldLengthY: number
  ) {
    this.initializeLightsToOff();
  }

  private initializeLightsToOff() {
    for (let y = 0; y < this.fieldLengthY; y++) {
      const line = Array(this.fieldLengthX).fill(0);
      this.lightField.push(line);
    }
  }

  public increaseBrightness(position: Position, brightness = 1): void {
    this.lightField[position.y][position.x] += brightness;
  }

  public decreaseBrightness(position: Position, brightness = 1): void {
    if (this.lightField[position.y][position.x] - brightness < 0) {
      this.lightField[position.y][position.x] = 0;
    } else {
      this.lightField[position.y][position.x] -= brightness;
    }
  }

  public getLightBrightness(position: Position): LightState {
    return this.lightField[position.y][position.x];
  }

  public forEachLight(fn: (position: Position) => unknown): void {
    for (let y = 0; y < this.fieldLengthY; y++) {
      for (let x = 0; x < this.fieldLengthX; x++) {
        fn(Position.create({ x, y }));
      }
    }
  }

  public forEachLightInSquare(
    startPos: Position,
    endPos: Position,
    fn: (position: Position) => unknown
  ): void {
    for (let y = startPos.y; y <= endPos.y; y++) {
      for (let x = startPos.x; x <= endPos.x; x++) {
        fn(Position.create({ x, y }));
      }
    }
  }
}

export type LightState = number;
