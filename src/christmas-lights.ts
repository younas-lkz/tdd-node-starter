import { LightField } from "./light-field";
import { Position } from "./position";

export class ChristmasLights {
  private lightField: LightField;

  constructor(fieldLengthX: number, fieldLengthY: number) {
    this.lightField = new LightField(fieldLengthX, fieldLengthY);
  }

  public turnOn(startPos: Position, endPos: Position) {
    this.lightField.forEachLightInSquare(startPos, endPos, (lightPos) =>
      this.lightField.increaseBrightness(lightPos)
    );
  }

  public turnOff(startPos: Position, endPos: Position) {
    this.lightField.forEachLightInSquare(startPos, endPos, (lightPos) =>
      this.lightField.decreaseBrightness(lightPos)
    );
  }

  public toggle(startPos: Position, endPos: Position) {
    this.lightField.forEachLightInSquare(startPos, endPos, (lightPos) =>
      this.lightField.increaseBrightness(lightPos, 2)
    );
  }

  public getBrightness() {
    let totalBrightness = 0;

    this.lightField.forEachLight((lightPos) => {
      const lightBrightness = this.lightField.getLightBrightness(lightPos);
      totalBrightness += lightBrightness;
    });

    return totalBrightness;
  }
}
