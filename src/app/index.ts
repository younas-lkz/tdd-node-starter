import { LocationGetter } from "../location/domain/primary-ports/location-getter.port";

export class App {
  public constructor(private readonly locationGetter: LocationGetter) {}

  public run(): void {
    this.locationGetter.getCityLocationByName();
  }
}
