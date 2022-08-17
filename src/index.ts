import { AxiosHttpClient } from "./shared/secondary-adapters/http-client/axios-http-client";
// import { DeterministicHttpClient } from "./shared/secondary-adapters/http-client/deterministic-http-client";

import { LocationGetter } from "./weather/domain/primary-ports/city-location/city-location";
import { CliLocation } from "./weather/primary-adapters/location/cli/cli-location";

import { OpenWeatherLocation } from "./weather/secondary-adapters/location-client/open-weather/open-weather-location";

const httpClient = new AxiosHttpClient("http://api.openweathermap.org");
const locationClient = new OpenWeatherLocation(httpClient);
locationClient.setApiKey("374baee6f45467c12a75cc252a8265a1");
const locationGetter: LocationGetter = new CliLocation(locationClient);

locationGetter.getCityLocationByName();
