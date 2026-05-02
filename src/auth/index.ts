import { getKiwoomBaseUrl } from "../config/constants";
import {
  KiwoomApiError,
  KiwoomAuthenticationError,
  KiwoomValidationError,
} from "../errors";
import type { KiwoomClientConfig, KiwoomTokenResponse } from "../types";
import { camelizeKeys } from "../utils/case";

const createTimeoutSignal = (timeoutMs: number) =>
  typeof AbortSignal !== "undefined" && "timeout" in AbortSignal
    ? AbortSignal.timeout(timeoutMs)
    : undefined;

const isSuccessfulReturnCode = (returnCode: unknown) =>
  returnCode === undefined ||
  returnCode === null ||
  /^0+$/.test(String(returnCode));

export class KiwoomAuth {
  private readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;
  private readonly timeoutMs: number;

  constructor(private readonly config: KiwoomClientConfig) {
    this.baseUrl = getKiwoomBaseUrl(config.env);
    this.fetchImpl = config.fetchImpl ?? globalThis.fetch;
    this.timeoutMs = config.timeoutMs ?? 30_000;
  }

  async generateToken(): Promise<KiwoomTokenResponse> {
    const response = await this.fetchImpl(`${this.baseUrl}/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
        appkey: this.config.appKey,
        secretkey: this.config.appSecret,
      }),
      signal: createTimeoutSignal(this.timeoutMs),
    });

    const body = await response.json().catch(() => ({}));
    if (response.status === 400) {
      throw new KiwoomValidationError("Invalid Kiwoom token request.");
    }
    if (response.status === 401 || response.status === 403) {
      throw new KiwoomAuthenticationError(
        "Kiwoom authentication failed.",
        response.status,
        body,
      );
    }
    if (!response.ok) {
      throw new KiwoomApiError(
        `Unexpected Kiwoom token response status ${response.status}.`,
        response.status,
        body,
      );
    }

    const parsed = camelizeKeys(body) as {
      tokenType?: string;
      token?: string;
      expiresDt?: string;
      returnCode?: string | number;
      returnMsg?: string;
    };
    if (!isSuccessfulReturnCode(parsed.returnCode)) {
      throw new KiwoomApiError(
        parsed.returnMsg || `Kiwoom API returned ${parsed.returnCode}.`,
        response.status,
        body,
      );
    }
    if (!parsed.token?.trim()) {
      throw new KiwoomApiError("Kiwoom token response did not include token.");
    }

    return {
      tokenType: parsed.tokenType,
      token: parsed.token,
      expiresDt: parsed.expiresDt,
      raw: body,
    };
  }

  async revokeToken(token: string): Promise<void> {
    const response = await this.fetchImpl(`${this.baseUrl}/oauth2/revoke`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        appkey: this.config.appKey,
        secretkey: this.config.appSecret,
        token,
      }),
      signal: createTimeoutSignal(this.timeoutMs),
    });

    if (!response.ok) {
      throw new KiwoomApiError(
        `Failed to revoke Kiwoom token with status ${response.status}.`,
        response.status,
      );
    }
  }
}
