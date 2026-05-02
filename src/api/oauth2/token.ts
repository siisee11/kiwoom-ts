import { KiwoomAuth } from "../../auth";
import { getKiwoomBaseUrl } from "../../config/constants";
import type { KiwoomEnv } from "../../types";

/**
 * 접근토큰 발급 요청 인터페이스
 */
export interface KiwoomOAuthTokenRequest {
  /** grant_type (client_credentials 입력) */
  grant_type: "client_credentials";
  /** 앱키 */
  appkey: string;
  /** 시크릿키 */
  secretkey: string;
}

/**
 * 접근토큰 발급 응답 인터페이스
 */
export interface KiwoomOAuthTokenResponse {
  /** 만료일 (YYYYMMDDHHMISS) */
  expires_dt: string;
  /** 토큰타입 (Bearer) */
  token_type: string;
  /** 접근토큰 */
  token: string;
  /** 응답 코드 (0: 성공) */
  return_code?: number;
  /** 응답 메시지 */
  return_msg?: string;
}

const getEnv = (isMock: boolean): KiwoomEnv => (isMock ? "demo" : "real");

const getRawField = <T>(raw: unknown, field: string): T | undefined => {
  if (!raw || typeof raw !== "object") return undefined;
  return (raw as Record<string, T>)[field];
};

/**
 * 접근토큰 발급 (au10001)
 *
 * OAuth 인증을 위한 접근 토큰을 발급받습니다.
 *
 * @param {KiwoomOAuthTokenReques} data - 요청 데이터
 * @param {boolean} [isMock=false] - 모의투자 여부 (기본값: false, 실전투자)
 * @returns {Promise<KiwoomOAuthTokenResponse>} 접근토큰 발급 응답
 *
 * @example
 * ```typescript
 * const params: KiwoomOAuthTokenRequest = {
 *   grant_type: 'client_credentials',
 *   appkey: 'YourAppKey',
 *   secretkey: 'YourSecretKey'
 * };
 *
 * // 실전투자
 * const response = await issueAccessToken(params);
 * console.log(response.token);
 *
 * // 모의투자
 * const mockResponse = await issueAccessToken(params, true);
 * console.log(mockResponse.token);
 * ```
 */
export async function issueAccessToken(
  data: KiwoomOAuthTokenRequest,
  isMock = false,
): Promise<KiwoomOAuthTokenResponse> {
  const auth = new KiwoomAuth({
    appKey: data.appkey,
    appSecret: data.secretkey,
    env: getEnv(isMock),
  });
  const token = await auth.generateToken();

  return {
    expires_dt:
      getRawField<string>(token.raw, "expires_dt") ?? token.expiresDt ?? "",
    token_type:
      getRawField<string>(token.raw, "token_type") ??
      token.tokenType ??
      "Bearer",
    token: token.token,
    return_code: getRawField<number>(token.raw, "return_code"),
    return_msg: getRawField<string>(token.raw, "return_msg"),
  };
}

export const getKiwoomOAuthBaseUrl = (isMock = false) =>
  getKiwoomBaseUrl(getEnv(isMock));
