import readline from "readline";

import { LocationGetter } from "../../../domain/primary-ports/city-location/city-location";
import { LocationClient } from "../../../domain/secondary-ports/location-client/location-client.port";

import { GetCityLocationByName } from "../../../domain/use-cases/get-city-location-by-name/get-city-location-by-name.use-case";

export class GuiLocation implements LocationGetter {
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
