import { LocationGetter } from "./weather/domain/primary-ports/city-location/city-location";
import { GuiLocation } from "./weather/primary-adapters/location/gui/gui-location";

import { InMemoryLocation } from "./weather/secondary-adapters/location-client/in-memory/in-memory-location";
import { Location } from "./weather/domain/models/location.model";

const locationClient = new InMemoryLocation();
locationClient.setNextLocation(
  Location.create({
    latitude: 51.509093,
    longitude: -0.094151,
  })
);
const locationGetter: LocationGetter = new GuiLocation(locationClient);

locationGetter.getCityLocationByName();
