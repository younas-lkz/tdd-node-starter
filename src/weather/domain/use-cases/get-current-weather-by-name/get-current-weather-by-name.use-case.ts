import { LocationClient } from "../../secondary-ports/location-client/location-client.port";

import { Weather } from "../../models/weather.model";

export class GetCurrentWeatherByName {
  constructor(private readonly location: LocationClient) {}

  async execute(cityName: string): Promise<Weather> {
    const cityLocation = this.location.getCityLocationFromName(cityName);

    return Weather.GOOD;
  }
}
