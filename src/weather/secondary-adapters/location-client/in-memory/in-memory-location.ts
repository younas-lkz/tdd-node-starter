import { LocationClient } from "../../../domain/secondary-ports/location-client/location-client.port";

import { Location } from "../../../domain/models/location.model";

export class InMemoryLocation implements LocationClient {
  private nextLocation!: Location;

  public async getCityLocationFromName(): Promise<Location> {
    return this.nextLocation;
  }

  public setNextLocation(nextLocation: Location) {
    this.nextLocation = nextLocation;
  }
}
