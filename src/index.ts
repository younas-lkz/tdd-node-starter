import { ExpressApplicationAdapter } from "./driving-adapter/application/express/express-application.adapter";
import { InMemoryApplicationAdapter } from "./driving-adapter/application/in-memory/in-memory-application.adapter";
import { IApplication } from "./driving-port/application.port";

const main = () => {
  // const application: IApplication = new InMemoryApplicationAdapter();
  const application: IApplication = new ExpressApplicationAdapter();

  application.start();
};

main();
