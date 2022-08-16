import { DeterministicHttpClient } from "../../../shared/secondary-adapters/http-client/deterministic-http-client";

import { Weather } from "../../models/weather.model";

import { GetCurrentWeatherByName } from "./get-current-weather-by-name.use-case";

describe("Get current weather by name", () => {
  let deterministicHttpClient: DeterministicHttpClient;
  //   let
  let getCurrentWeatherByName: GetCurrentWeatherByName;

  beforeEach(() => {
    deterministicHttpClient = new DeterministicHttpClient();
    // getCurrentWeatherByName = new GetCurrentWeatherByName(
    //   deterministicHttpClient
    // );
  });

  it("GIVEN madrid city WHEN I get the current weather THEN I should get the current madrid weather", async () => {
    deterministicHttpClient.setNextGetResult(Weather.GOOD);

    // const currentWeather = await getCurrentWeatherByName.execute();

    // expect(currentWeather).toEqual(Weather.GOOD);
  });
});
