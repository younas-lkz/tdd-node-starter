import { Weather } from "../../models/weather.model";
import { LocationClient } from "../../secondary-port/location/location-client.port";

export class GetCurrentWeatherByName {
  constructor(private readonly location: LocationClient) {}

  async execute(cityName: string): Promise<Weather> {
    const cityLocation = this.location.getCityLocationFromName(cityName);

    return Weather.GOOD;
  }
}
