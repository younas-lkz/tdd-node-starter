import { locationGetter } from "./config/dependencies";
import { App } from "./app";

new App(locationGetter).run();
