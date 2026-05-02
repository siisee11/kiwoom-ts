import { getKiwoomBaseUrl } from "../config/constants";
import {
  KiwoomApiError,
  KiwoomAuthenticationError,
  KiwoomValidationError,
} from "../errors";
import type {
  KiwoomClientConfig,
  KiwoomEndpointDefinition,
  KiwoomEndpointInput,
  KiwoomHttpResponse,
  KiwoomRecord,
} from "../types";
import { camelizeKeys, normalizeHeaders } from "../utils/case";

const stringifyBodyValue = (value: unknown) =>
  typeof value === "string" ? value : String(value);

const createTimeoutSignal = (timeoutMs: number) =>
  typeof AbortSignal !== "undefined" && "timeout" in AbortSignal
    ? AbortSignal.timeout(timeoutMs)
    : undefined;

const getBodyValue = (input: KiwoomEndpointInput, inputKey: string) => {
  const value = input[inputKey];
  if (value === undefined || value === null) return null;
  return stringifyBodyValue(value);
};

const isSuccessfulReturnCode = (returnCode: unknown) =>
  returnCode === undefined ||
  returnCode === null ||
  /^0+$/.test(String(returnCode));

export class KiwoomHttpClient {
  private readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;
  private readonly timeoutMs: number;

  constructor(
    config: KiwoomClientConfig,
    private readonly tokenLoader: () => Promise<string>,
  ) {
    this.baseUrl = getKiwoomBaseUrl(config.env);
    this.fetchImpl = config.fetchImpl ?? globalThis.fetch;
    this.timeoutMs = config.timeoutMs ?? 30_000;
  }

  async invoke<T extends KiwoomRecord = KiwoomRecord>(
    definition: KiwoomEndpointDefinition,
    input: KiwoomEndpointInput = {},
  ): Promise<KiwoomHttpResponse<T>> {
    for (const param of definition.requiredParams ?? []) {
      const value = input[param];
      if (value === undefined || value === null || value === "") {
        throw new KiwoomValidationError(
          `Missing required Kiwoom parameter: ${param}`,
        );
      }
    }

    const body = Object.fromEntries(
      Object.entries(definition.bodyMap)
        .map(([apiKey, inputKey]) => {
          const value = getBodyValue(input, inputKey);
          return value === null ? null : [apiKey, value];
        })
        .filter((entry): entry is [string, string] => entry !== null),
    );
    const token = await this.tokenLoader();
    const response = await this.fetchImpl(`${this.baseUrl}${definition.path}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization: `Bearer ${token}`,
        "api-id": definition.apiId,
        "con-yn": input.contYn ?? "N",
        "next-key": input.nextKey ?? "",
      },
      body: JSON.stringify(body),
      signal: createTimeoutSignal(this.timeoutMs),
    });

    const rawJson = await response.json().catch(() => ({}));
    if (response.status === 401 || response.status === 403) {
      throw new KiwoomAuthenticationError(
        "Kiwoom request authentication failed.",
        response.status,
        rawJson,
      );
    }
    if (!response.ok) {
      throw new KiwoomApiError(
        `Kiwoom request failed with status ${response.status}.`,
        response.status,
        rawJson,
      );
    }

    const bodyJson = camelizeKeys(rawJson) as T & {
      returnCode?: string | number;
      returnMsg?: string;
    };
    if (!isSuccessfulReturnCode(bodyJson.returnCode)) {
      throw new KiwoomApiError(
        bodyJson.returnMsg || `Kiwoom API returned ${bodyJson.returnCode}.`,
        response.status,
        rawJson,
      );
    }

    return {
      headers: normalizeHeaders(response.headers),
      body: bodyJson,
    };
  }
}
