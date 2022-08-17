import { LocationClient } from "../../secondary-ports/location-client.port";

import { Location } from "../../models/location.model";

export class GetCityLocationByName {
  constructor(private readonly location: LocationClient) {}

  async execute(cityName: string): Promise<Location> {
    return this.location.getCityLocationFromName(cityName);
  }
}
