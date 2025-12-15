import { issueAccessToken, KiwoomOAuthTokenResponse } from '../api/oauth2/token';
import { fetchDailyBalanceYield, KiwoomDailyBalanceYieldResponse } from '../api/domestic/account/daily-balance';

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
    constructor(appKey: string, appSecret: string, isMock: boolean = false) {
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
        return issueAccessToken({
            grant_type: 'client_credentials',
            appkey: this.appKey,
            secretkey: this.appSecret
        }, this.isMock);
    }

    /**
     * 일별잔고수익률 조회 (ka01690)
     * 
     * @param token 접근토큰
     * @param date 조회일자 (YYYYMMDD)
     */
    async getDailyBalanceYield(token: string, date: string): Promise<KiwoomDailyBalanceYieldResponse> {
        return fetchDailyBalanceYield(token, { qry_dt: date }, this.isMock);
    }
}
