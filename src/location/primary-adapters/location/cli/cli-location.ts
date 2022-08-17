import readline from "readline";

import { LocationGetter } from "../../../domain/primary-ports/city-location.port";
import { LocationClient } from "../../../domain/secondary-ports/location-client.port";

import { GetCityLocationByName } from "../../../domain/use-cases/get-city-location-by-name/get-city-location-by-name";

export class CliLocation implements LocationGetter {
  constructor(private readonly location: LocationClient) {}

  getCityLocationByName(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });

    rl.on("line", async (city) => {
      const cityLocation = await new GetCityLocationByName(
        this.location
      ).execute(city);
      console.log(cityLocation);
    });
  }
}
