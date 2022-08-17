import axios from "axios";

import { HttpClient } from "../../domain/secondary-ports/http-client.port";

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly baseUrl: string) {}

  public async get<Result>(uri: string): Promise<Result> {
    return (await axios.get(`${this.baseUrl}/${uri}`)).data;
  }
}
