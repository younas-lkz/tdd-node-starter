import { InMemoryLocation } from "../../../secondary-adapters/location-client/in-memory/in-memory-location";
import { Location } from "../../models/location.model";

import { GetCityLocationByName } from "./get-city-location-by-name.use-case";

describe("Get city location by name", () => {
  let inMemoryLocationClient: InMemoryLocation;
  let getCurrentWeatherByName: GetCityLocationByName;

  beforeEach(() => {
    inMemoryLocationClient = new InMemoryLocation();
    getCurrentWeatherByName = new GetCityLocationByName(inMemoryLocationClient);
  });

  it("GIVEN madrid city WHEN I get the current weather THEN I should get the madrid location", async () => {
    const nextLocation = Location.create({
      latitude: 51.509093,
      longitude: -0.094151,
    });
    inMemoryLocationClient.setNextLocation(nextLocation);

    const resultLocation = await getCurrentWeatherByName.execute("London");

    expect(resultLocation.equals(nextLocation)).toBeTruthy();
  });
});
