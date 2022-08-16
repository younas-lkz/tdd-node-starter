import { HttpClient } from "../../secondary-ports/http-client/http-client.port";

export class DeterministicHttpClient implements HttpClient {
  private nextGetResult: unknown;

  public get<Result>(): Result {
    return this.nextGetResult as Result;
  }

  public setNextGetResult(nextGetResult: unknown) {
    this.nextGetResult = nextGetResult;
  }
}
