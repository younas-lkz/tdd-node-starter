import { Location } from "../../models/location.model";

export interface LocationClient {
  getCityLocationFromName(cityName: string): Promise<Location>;
}
