import { IApplication } from "../../../driving-port/application.port";

export class InMemoryApplicationAdapter implements IApplication {
  start = () => {
    console.log("===== In Memory Application started =====");
  };
}
