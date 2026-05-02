import { getKiwoomBaseUrl } from "../../../config/constants";
import { KiwoomApiError } from "../../../errors";
import { getHeaderValue } from "../../../utils/case";

/**
 * 실시간종목조회순위 요청 인터페이스
 */
export interface KiwoomStockSearchRankingRequest {
  /**
   * 구분
   * 1:1분, 2:10분, 3:1시간, 4:당일 누적, 5:30초
   */
  qry_tp: "1" | "2" | "3" | "4" | "5";
}

/**
 * 실시간종목조회순위 아이템
 */
export interface KiwoomStockSearchRankingItem {
  /** 종목명 */
  stk_nm: string;
  /** 빅데이터 순위 */
  bigd_rank: string;
  /** 순위 등락 */
  rank_chg: string;
  /** 순위 등락 부호 */
  rank_chg_sign: string;
  /** 과거 현재가 */
  past_curr_prc: string;
  /** 기준가 대비 부호 */
  base_comp_sign: string;
  /** 기준가 대비 등락율 */
  base_comp_chgr: string;
  /** 직전 기준 대비 부호 */
  prev_base_sign: string;
  /** 직전 기준 대비 등락율 */
  prev_base_chgr: string;
  /** 일자 */
  dt: string;
  /** 시간 */
  tm: string;
  /** 종목코드 */
  stk_cd: string;
}

/**
 * 실시간종목조회순위 응답 인터페이스
 */
export interface KiwoomStockSearchRankingResponse {
  /** 연속조회여부 */
  cont_yn?: string;
  /** 연속조회키 */
  next_key?: string;
  /** 실시간종목조회순위 리스트 */
  item_inq_rank: KiwoomStockSearchRankingItem[];
}

/**
 * 실시간종목조회순위 (ka00198)
 *
 * @param token 접근토큰
 * @param data 요청 데이터
 * @param isMock 모의투자 여부 (기본값: false, 실전투자)
 */
export async function fetchStockSearchRanking(
  token: string,
  data: KiwoomStockSearchRankingRequest,
  isMock = false,
): Promise<KiwoomStockSearchRankingResponse> {
  const host = getKiwoomBaseUrl(isMock ? "demo" : "real");
  const endpoint = "/api/dostk/stkinfo";
  const url = `${host}${endpoint}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      authorization: `Bearer ${token}`,
      "api-id": "ka00198",
    },
    body: JSON.stringify(data),
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new KiwoomApiError(
      `Kiwoom request failed with status ${response.status}.`,
      response.status,
      body,
    );
  }

  return {
    ...(body as KiwoomStockSearchRankingResponse),
    cont_yn: getHeaderValue(response.headers, "cont-yn"),
    next_key: getHeaderValue(response.headers, "next-key"),
  };
}
