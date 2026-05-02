import { KiwoomDomesticAccountClient } from "../api/domestic/account";
import {
  fetchDailyBalanceYield,
  type KiwoomDailyBalanceYieldResponse,
} from "../api/domestic/account/daily-balance";
import { KiwoomDomesticStockClient } from "../api/domestic/stock";
import type {
  KiwoomStockSearchRankingRequest,
  KiwoomStockSearchRankingResponse,
} from "../api/domestic/stock/ranking";
import { fetchStockSearchRanking } from "../api/domestic/stock/ranking";
import type { KiwoomOAuthTokenResponse } from "../api/oauth2/token";
import { KiwoomAuth } from "../auth";
import { createKiwoomTokenCoordinator } from "../auth/token-coordinator";
import { KiwoomHttpClient } from "../http";
import type { KiwoomClientConfig, KiwoomTokenResponse } from "../types";

const normalizeConfig = (
  configOrAppKey: KiwoomClientConfig | string,
  appSecret?: string,
  isMock = false,
): KiwoomClientConfig => {
  if (typeof configOrAppKey === "string") {
    return {
      appKey: configOrAppKey,
      appSecret: appSecret ?? "",
      env: isMock ? "demo" : "real",
    };
  }

  return configOrAppKey;
};

export class KiwoomClient {
  readonly auth: KiwoomAuth;
  readonly domesticAccount: KiwoomDomesticAccountClient;
  readonly domesticStock: KiwoomDomesticStockClient;

  private readonly config: KiwoomClientConfig;
  private readonly tokenCoordinator: ReturnType<
    typeof createKiwoomTokenCoordinator
  >;

  /**
   * KiwoomClient 생성자
   * @param config 앱키, 시크릿키, 환경, fetch 구현체 등의 설정
   */
  constructor(config: KiwoomClientConfig);
  /**
   * @deprecated 객체 기반 생성자인 `new KiwoomClient({ appKey, appSecret })`를 권장합니다.
   */
  constructor(appKey: string, appSecret: string, isMock?: boolean);
  constructor(
    configOrAppKey: KiwoomClientConfig | string,
    appSecret?: string,
    isMock = false,
  ) {
    this.config = normalizeConfig(configOrAppKey, appSecret, isMock);
    this.auth = new KiwoomAuth(this.config);
    this.tokenCoordinator = createKiwoomTokenCoordinator(
      this.auth,
      this.config.accessToken,
    );

    const http = new KiwoomHttpClient(this.config, () =>
      this.tokenCoordinator.ensure(),
    );
    this.domesticAccount = new KiwoomDomesticAccountClient(http);
    this.domesticStock = new KiwoomDomesticStockClient(http);
  }

  /**
   * 접근토큰 발급 (au10001)
   *
   * OAuth 인증을 위한 접근 토큰을 발급받습니다.
   * 생성시 입력한 앱키와 시크릿키를 사용합니다.
   */
  async issueAccessToken(): Promise<KiwoomOAuthTokenResponse> {
    const token = await this.auth.generateToken();
    const raw =
      token.raw && typeof token.raw === "object"
        ? (token.raw as Record<string, string | number>)
        : {};

    return {
      expires_dt:
        typeof raw.expires_dt === "string"
          ? raw.expires_dt
          : (token.expiresDt ?? ""),
      token_type:
        typeof raw.token_type === "string"
          ? raw.token_type
          : (token.tokenType ?? "Bearer"),
      token: token.token,
      return_code:
        typeof raw.return_code === "number" ? raw.return_code : undefined,
      return_msg:
        typeof raw.return_msg === "string" ? raw.return_msg : undefined,
    };
  }

  generateToken(): Promise<KiwoomTokenResponse> {
    return this.auth.generateToken();
  }

  ensureAccessToken(): Promise<string> {
    return this.tokenCoordinator.ensure();
  }

  refreshAccessToken(): Promise<string> {
    return this.tokenCoordinator.refresh();
  }

  setAccessToken(token: string, expiresDt?: string): void {
    this.tokenCoordinator.set(token, expiresDt);
  }

  resetAccessToken(): void {
    this.tokenCoordinator.reset();
  }

  /**
   * 일별잔고수익률 조회 (ka01690)
   *
   * @param token 접근토큰
   * @param date 조회일자 (YYYYMMDD)
   */
  async getDailyBalanceYield(
    token: string,
    date: string,
  ): Promise<KiwoomDailyBalanceYieldResponse> {
    return fetchDailyBalanceYield(
      token,
      { qry_dt: date },
      this.config.env === "demo",
    );
  }

  /**
   * 실시간종목조회순위 (ka00198)
   *
   * @param token 접근토큰
   * @param qry_tp 구분 (1:1분, 2:10분, 3:1시간, 4:당일 누적, 5:30초)
   */
  async getStockSearchRanking(
    token: string,
    qry_tp: KiwoomStockSearchRankingRequest["qry_tp"],
  ): Promise<KiwoomStockSearchRankingResponse> {
    return fetchStockSearchRanking(
      token,
      { qry_tp },
      this.config.env === "demo",
    );
  }
}

export const createKiwoomClient = (config: KiwoomClientConfig) =>
  new KiwoomClient(config);
