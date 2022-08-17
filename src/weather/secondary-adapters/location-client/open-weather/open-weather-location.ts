import { HttpClient } from "../../../../shared/secondary-ports/http-client/http-client.port";
import { LocationClient } from "../../../domain/secondary-ports/location-client/location-client.port";

import { Location } from "../../../domain/models/location.model";

import { ApiKeyMissingError } from "./api-key-missing.error";
import { NoCityFoundError } from "./no-city-found.error";

export class OpenWeatherLocation implements LocationClient {
  constructor(private readonly httpClient: HttpClient) {}

  private apiKey: string | null = null;

  public async getCityLocationFromName(cityName: string): Promise<Location> {
    if (!this.apiKey) {
      throw new ApiKeyMissingError();
    }

    const openWeatherResult = (
      await this.httpClient.get<OpenWeatherResult>(
        `geo/1.0/direct?q=${cityName}&limit=1&appid=${this.apiKey}`
      )
    ).at(0);

    if (!openWeatherResult) {
      throw new NoCityFoundError();
    }

    return Location.create({
      latitude: openWeatherResult.lat,
      longitude: openWeatherResult.lon,
    });
  }

  public setApiKey(key: string) {
    this.apiKey = key;
  }
}

export type OpenWeatherResult = CityLocation[];

interface CityLocation {
  lat: number;
  lon: number;
}
