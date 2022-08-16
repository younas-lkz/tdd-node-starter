import { LocationClient } from "../../../secondary-port/location-client/location-client.port";

import { Location } from "../../../models/location.model";

export class InMemoryLocation implements LocationClient {
  private nextLocation!: Location;

  public async getCityLocationFromName(): Promise<Location> {
    return this.nextLocation;
  }

  public setNextLocation(nextLocation: Location) {
    this.nextLocation = nextLocation;
  }
}
