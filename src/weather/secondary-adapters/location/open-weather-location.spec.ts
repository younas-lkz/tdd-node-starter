import { DeterministicHttpClient } from "../../../shared/secondary-adapters/http-client/deterministic-http-client";

import { Location } from "../../models/location.model";

import {
  OpenWeatherLocation,
  OpenWeatherResult,
} from "./open-weather-location";

describe("Open Weather Location", () => {
  let deterministicHttpClient: DeterministicHttpClient;
  let openWeatherLocation: OpenWeatherLocation;

  beforeEach(() => {
    deterministicHttpClient = new DeterministicHttpClient();
    openWeatherLocation = new OpenWeatherLocation(deterministicHttpClient);
  });

  it("Given the open weather location client WHEN I call it with London THEN it should returns to me the London's coordinates", async () => {
    const nextGetResult: OpenWeatherResult = {
      lat: 51.509093,
      lon: -0.094151,
    };
    deterministicHttpClient.setNextGetResult(nextGetResult);
    openWeatherLocation.setApiKey("this is an api key");

    const resultLocation = await openWeatherLocation.getCityLocationFromName(
      "London"
    );

    const expectedLocation = Location.create({
      latitude: nextGetResult.lat,
      longitude: nextGetResult.lon,
    });
    expect(resultLocation.equals(expectedLocation)).toBeTruthy();
  });
});
