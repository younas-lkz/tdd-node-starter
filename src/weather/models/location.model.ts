import { ValueObject } from "../../shared/ddd-tools/value-object";

interface LocationProps {
  longitude: number;
  latitude: number;
}

export class Location extends ValueObject<LocationProps> {
  private constructor(props: LocationProps) {
    super(props);
  }

  get longitude(): LocationProps["longitude"] {
    return this.longitude;
  }

  get latitude(): LocationProps["latitude"] {
    return this.latitude;
  }

  public static create(locationProps: LocationProps): Location {
    return new Location(locationProps);
  }
}
