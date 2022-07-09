import { ChristmasLights } from "./christmas-lights";
import { Position } from "./position";

const christmasLights = new ChristmasLights(1_000, 1_000);
christmasLights.turnOn(
  Position.create({ x: 887, y: 9 }),
  Position.create({ x: 959, y: 629 })
);
christmasLights.turnOn(
  Position.create({ x: 454, y: 398 }),
  Position.create({ x: 844, y: 448 })
);
christmasLights.turnOff(
  Position.create({ x: 539, y: 243 }),
  Position.create({ x: 559, y: 965 })
);
christmasLights.turnOff(
  Position.create({ x: 370, y: 819 }),
  Position.create({ x: 676, y: 868 })
);
christmasLights.turnOff(
  Position.create({ x: 145, y: 40 }),
  Position.create({ x: 370, y: 997 })
);
christmasLights.turnOff(
  Position.create({ x: 301, y: 3 }),
  Position.create({ x: 808, y: 453 })
);
christmasLights.turnOn(
  Position.create({ x: 351, y: 678 }),
  Position.create({ x: 951, y: 908 })
);
christmasLights.toggle(
  Position.create({ x: 720, y: 196 }),
  Position.create({ x: 897, y: 994 })
);
christmasLights.toggle(
  Position.create({ x: 831, y: 394 }),
  Position.create({ x: 904, y: 860 })
);

console.log(christmasLights.getBrightness());
