export type KiwoomEnv = "real" | "demo";

export type KiwoomClientConfig = {
  appKey: string;
  appSecret: string;
  env?: KiwoomEnv;
  fetchImpl?: typeof fetch;
  timeoutMs?: number;
  accessToken?: string;
};

export type KiwoomTokenResponse = {
  tokenType?: string;
  token: string;
  expiresDt?: string;
  raw: unknown;
};

export type KiwoomHttpResponse<T = KiwoomRecord> = {
  headers: Record<string, string>;
  body: T;
};

export type KiwoomRecord = Record<string, unknown>;

export type KiwoomEndpointDefinition = {
  path: string;
  apiId: string;
  bodyMap: Record<string, string>;
  requiredParams?: string[];
};

export type KiwoomEndpointInput = Record<string, unknown> & {
  contYn?: string;
  nextKey?: string;
};
