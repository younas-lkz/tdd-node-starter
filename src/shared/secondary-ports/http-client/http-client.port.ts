export interface HttpClient {
  get<Result>(uri: string): Promise<Result>;
}
