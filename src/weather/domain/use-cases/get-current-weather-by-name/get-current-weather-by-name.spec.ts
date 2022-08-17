import { InMemoryLocation } from "../../../secondary-adapters/location-client/in-memory/in-memory-location";

import { Weather } from "../../models/weather.model";

import { GetCurrentWeatherByName } from "./get-current-weather-by-name.use-case";
import { Location } from "../../models/location.model";

describe("Get current weather by name", () => {
  let inMemoryLocationClient: InMemoryLocation;
  let getCurrentWeatherByName: GetCurrentWeatherByName;

  beforeEach(() => {
    inMemoryLocationClient = new InMemoryLocation();
    getCurrentWeatherByName = new GetCurrentWeatherByName(
      inMemoryLocationClient
    );
  });

  it("GIVEN madrid city WHEN I get the current weather THEN I should get the current madrid weather", async () => {
    const nextLocation = Location.create({
      latitude: 51.509093,
      longitude: -0.094151,
    });
    inMemoryLocationClient.setNextLocation(nextLocation);

    const currentWeather = await getCurrentWeatherByName.execute("London");

    expect(currentWeather).toEqual(Weather.GOOD);
  });
});
