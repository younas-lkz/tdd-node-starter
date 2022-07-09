import * as fc from "fast-check";
import { pre } from "fast-check";

import { ChristmasLights } from "./christmas-lights";
import { Position } from "./position";

describe("Christmas Lights Tests", () => {
  let christmasLights: ChristmasLights;

  beforeEach(() => {
    christmasLights = new ChristmasLights(1_000, 1_000);
  });

  // it("", () => {
  //   fc.assert(
  //     fc.property(
  //       fc.nat({ max: 999 }),
  //       fc.nat({ max: 999 }),
  //       fc.nat({ max: 999 }),
  //       fc.nat({ max: 999 }),
  //       (startX, startY, endX, endY) => {
  //         pre(startX <= endX && startY <= endY);
  //         const christmasLights = new ChristmasLights(1_000, 1_000);

  //         const startPos = Position.create({ x: startX, y: startY });
  //         const endPos = Position.create({ x: endX, y: endY });

  //         christmasLights.turnOn(startPos, endPos);
  //         const brightness = christmasLights.getBrightness();

  //         const diffX = endX - startX + 1;
  //         const diffY = endY - startY + 1;
  //         expect(brightness).toEqual(diffX * diffY);
  //       }
  //     )
  //   );
  // });
  it("On(0,0)->(0,0) === 1 brightness", () => {
    const startPos = Position.create({ x: 0, y: 0 });
    const endPos = Position.create({ x: 0, y: 0 });

    christmasLights.turnOn(startPos, endPos);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(1);
  });

  it("On(0,0)->(0,1) === 2 brightness", () => {
    const startPos = Position.create({ x: 0, y: 0 });
    const endPos = Position.create({ x: 0, y: 1 });

    christmasLights.turnOn(startPos, endPos);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(2);
  });

  it("On(0,0)->(999,999) === 1 000 000 brightness", () => {
    const startPos = Position.create({ x: 0, y: 0 });
    const endPos = Position.create({ x: 999, y: 999 });

    christmasLights.turnOn(startPos, endPos);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(1_000_000);
  });

  it("On(0,0)->(0,0) & Off(0,0)->(0,0) === 0 brightness", () => {
    const startPos = Position.create({ x: 0, y: 0 });
    const endPos = Position.create({ x: 0, y: 0 });

    christmasLights.turnOn(startPos, endPos);
    christmasLights.turnOff(startPos, endPos);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(0);
  });

  it("On(0,0)->(0,1) & Off(0,0)->(0,1) === 0 brightness", () => {
    const startPos = Position.create({ x: 0, y: 0 });
    const endPos = Position.create({ x: 0, y: 1 });

    christmasLights.turnOn(startPos, endPos);
    christmasLights.turnOff(startPos, endPos);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(0);
  });

  it("On(0,0)->(999,999) & Off(0,0)->(999,999) === 0 brightness", () => {
    const startPosOn = Position.create({ x: 0, y: 0 });
    const endPosOn = Position.create({ x: 999, y: 999 });
    const startPosOff = Position.create({ x: 0, y: 0 });
    const endPosOff = Position.create({ x: 999, y: 999 });

    christmasLights.turnOn(startPosOn, endPosOn);
    christmasLights.turnOff(startPosOff, endPosOff);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(0);
  });

  it("On(0,0)->(999,999) & Off(0,0)->(999,998) === 1000 brightness", () => {
    const startPosOn = Position.create({ x: 0, y: 0 });
    const endPosOn = Position.create({ x: 999, y: 999 });
    const startPosOff = Position.create({ x: 0, y: 0 });
    const endPosOff = Position.create({ x: 998, y: 999 });

    christmasLights.turnOn(startPosOn, endPosOn);
    christmasLights.turnOff(startPosOff, endPosOff);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(1000);
  });

  it("Toggle(0,0)->(0,0) === 2 brightness", () => {
    const startPosToggle = Position.create({ x: 0, y: 0 });
    const endPosToggle = Position.create({ x: 0, y: 0 });

    christmasLights.toggle(startPosToggle, endPosToggle);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(2);
  });

  it("Toggle(0,0)->(0,1) === 4 brightness", () => {
    const startPosToggle = Position.create({ x: 0, y: 0 });
    const endPosToggle = Position.create({ x: 0, y: 1 });

    christmasLights.toggle(startPosToggle, endPosToggle);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(4);
  });

  it("Toggle(0,0)->(0,2) === 6 brightness", () => {
    const startPosToggle = Position.create({ x: 0, y: 0 });
    const endPosToggle = Position.create({ x: 0, y: 2 });

    christmasLights.toggle(startPosToggle, endPosToggle);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(6);
  });

  it("Toggle(0,0)->(0,2) & Toggle(0,0)->(0,2) === 12 brightness", () => {
    const startPosToggle = Position.create({ x: 0, y: 0 });
    const endPosToggle = Position.create({ x: 0, y: 2 });

    christmasLights.toggle(startPosToggle, endPosToggle);
    christmasLights.toggle(startPosToggle, endPosToggle);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(12);
  });
});
