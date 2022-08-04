import express, { Express } from "express";

import { IApplication } from "../../../driving-port/application.port";

export class ExpressApplicationAdapter implements IApplication {
  private app: Express;

  constructor() {
    this.app = express();
  }

  public start = () => {
    this.app.listen(3000, () => {
      console.log("===== Express Application started =====");
    });
  };
}
