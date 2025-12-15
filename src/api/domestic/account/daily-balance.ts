import axios from "axios";

/**
 * 일별잔고수익률 요청 인터페이스
 */
export interface KiwoomDailyBalanceYieldRequest {
  /** 조회일자 (YYYYMMDD) */
  qry_dt: string;
}

/**
 * 일별잔고수익률 상세 잔고 아이템
 */
export interface KiwoomDailyBalanceItem {
  /** 현재가 */
  cur_prc: string;
  /** 종목코드 */
  stk_cd: string;
  /** 종목명 */
  stk_nm: string;
  /** 보유 수량 */
  rmnd_qty: string;
  /** 매입 단가 */
  buy_uv: string;
  /** 매수비중 */
  buy_wght: string;
  /** 평가손익 */
  evltv_prft: string;
  /** 수익률 */
  prft_rt: string;
  /** 평가금액 */
  evlt_amt: string;
  /** 평가비중 */
  evlt_wght: string;
}

/**
 * 일별잔고수익률 응답 인터페이스
 */
export interface KiwoomDailyBalanceYieldResponse {
  /** 연속조회여부 */
  cont_yn?: string;
  /** 연속조회키 */
  next_key?: string;
  /** 일자 */
  dt: string;
  /** 총 매입가 */
  tot_buy_amt: string;
  /** 총 평가금액 */
  tot_evlt_amt: string;
  /** 총 평가손익 */
  tot_evltv_prft: string;
  /** 수익률 */
  tot_prft_rt: string;
  /** 예수금 */
  dbst_bal: string;
  /** 추정자산 */
  day_stk_asst: string;
  /** 현금비중 */
  buy_wght: string;
  /** 일별잔고수익률 리스트 */
  day_bal_rt: KiwoomDailyBalanceItem[];
}

/**
 * 일별잔고수익률 조회 (ka01690)
 *
 * @param token 접근토큰
 * @param data 요청 데이터
 * @param isMock 모의투자 여부 (기본값: false, 실전투자)
 */
export async function fetchDailyBalanceYield(
  token: string,
  data: KiwoomDailyBalanceYieldRequest,
  isMock = false,
): Promise<KiwoomDailyBalanceYieldResponse> {
  const host = isMock ? "https://mockapi.kiwoom.com" : "https://api.kiwoom.com";
  const endpoint = "/api/dostk/acnt";
  const url = `${host}${endpoint}`;

  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    authorization: `Bearer ${token}`,
    "api-id": "ka01690",
  };

  try {
    const response = await axios.post<KiwoomDailyBalanceYieldResponse>(
      url,
      data,
      {
        headers,
      },
    );

    const result = {
      ...response.data,
      cont_yn: response.headers["cont-yn"],
      next_key: response.headers["next-key"],
    };

    return result;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    }
    throw error;
  }
}
