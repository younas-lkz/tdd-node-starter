import { LocationGetter } from "../../location/domain/primary-ports/city-location.port";
import { CliLocation } from "../../location/primary-adapters/location/cli/cli-location";
import { AxiosHttpClient } from "../../location/secondary-adapters/http-client/axios-http-client";
import { OpenWeatherLocation } from "../../location/secondary-adapters/location-client/open-weather/open-weather-location";

const httpClient = new AxiosHttpClient("http://api.openweathermap.org");
const locationClient = new OpenWeatherLocation(httpClient);
locationClient.setApiKey("374baee6f45467c12a75cc252a8265a1");

export const locationGetter: LocationGetter = new CliLocation(locationClient);
