import {
  fetchDailyBalanceYield,
  type KiwoomDailyBalanceYieldResponse,
} from "../api/domestic/account/daily-balance";
import {
  fetchStockSearchRanking,
  type KiwoomStockSearchRankingRequest,
  type KiwoomStockSearchRankingResponse,
} from "../api/domestic/stock/ranking";
import {
  issueAccessToken,
  type KiwoomOAuthTokenResponse,
} from "../api/oauth2/token";

export class KiwoomClient {
  private readonly appKey: string;
  private readonly appSecret: string;
  private readonly isMock: boolean;

  /**
   * KiwoomClient 생성자
   * @param appKey 앱키
   * @param appSecret 시크릿키
   * @param isMock 모의투자 여부 (기본값: false, 실전투자)
   */
  constructor(appKey: string, appSecret: string, isMock = false) {
    this.appKey = appKey;
    this.appSecret = appSecret;
    this.isMock = isMock;
  }

  /**
   * 접근토큰 발급 (au10001)
   *
   * OAuth 인증을 위한 접근 토큰을 발급받습니다.
   * 생성시 입력한 앱키와 시크릿키를 사용합니다.
   */
  async issueAccessToken(): Promise<KiwoomOAuthTokenResponse> {
    return issueAccessToken(
      {
        grant_type: "client_credentials",
        appkey: this.appKey,
        secretkey: this.appSecret,
      },
      this.isMock,
    );
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
    return fetchDailyBalanceYield(token, { qry_dt: date }, this.isMock);
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
    return fetchStockSearchRanking(token, { qry_tp }, this.isMock);
  }
}
