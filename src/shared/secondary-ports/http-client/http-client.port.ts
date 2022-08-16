export interface HttpClient {
  get<Result>(uri: string): Result;
}
