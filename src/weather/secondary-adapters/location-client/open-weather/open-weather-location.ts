import { HttpClient } from "../../../../shared/secondary-ports/http-client/http-client.port";
import { LocationClient } from "../../../secondary-port/location-client/location-client.port";

import { Location } from "../../../models/location.model";

import { ApiKeyMissingError } from "./api-key-missing.error";

export class OpenWeatherLocation implements LocationClient {
  constructor(private readonly httpClient: HttpClient) {}

  private apiKey: string | null = null;

  public async getCityLocationFromName(cityName: string): Promise<Location> {
    if (!this.apiKey) {
      throw new ApiKeyMissingError();
    }

    const openWeatherResult = this.httpClient.get<OpenWeatherResult>(
      `geo/1.0/direct?q=${cityName}&limit=5&appid=${this.apiKey}`
    );

    return Location.create({
      latitude: openWeatherResult.lat,
      longitude: openWeatherResult.lon,
    });
  }

  public setApiKey(key: string) {
    this.apiKey = key;
  }
}

export interface OpenWeatherResult {
  lat: number;
  lon: number;
}
