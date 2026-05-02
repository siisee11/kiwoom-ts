import type { KiwoomHttpClient } from "../../../http";
import type {
  KiwoomEndpointDefinition,
  KiwoomEndpointInput,
  KiwoomHttpResponse,
  KiwoomRecord,
} from "../../../types";

export type KiwoomDepositBalanceDetails = KiwoomRecord & {
  entr?: string;
  pymnAlowAmt?: string;
  stkEntrPrst?: KiwoomRecord[];
};

export type KiwoomAccountEvaluationBalanceDetails = KiwoomRecord & {
  totPurAmt?: string;
  totEvltAmt?: string;
  totEvltPl?: string;
  totPrftRt?: string;
  prsmDpstAsetAmt?: string;
  acntEvltRemnIndvTot?: KiwoomRecord[];
};

export type KiwoomUnexecutedOrders = KiwoomRecord & {
  oso?: KiwoomRecord[];
};

export type KiwoomDailyBalanceYield = KiwoomRecord & {
  dt?: string;
  totBuyAmt?: string;
  totEvltAmt?: string;
  totEvltvPrft?: string;
  totPrftRt?: string;
  dbstBal?: string;
  dayStkAsst?: string;
  buyWght?: string;
  dayBalRt?: KiwoomRecord[];
};

const accountPath = "/api/dostk/acnt";

const definitions = {
  depositBalanceDetails: {
    path: accountPath,
    apiId: "kt00001",
    bodyMap: {
      qry_tp: "qryTp",
    },
    requiredParams: ["qryTp"],
  },
  accountEvaluationBalanceDetails: {
    path: accountPath,
    apiId: "kt00018",
    bodyMap: {
      qry_tp: "qryTp",
      dmst_stex_tp: "dmstStexTp",
    },
    requiredParams: ["qryTp", "dmstStexTp"],
  },
  unexecuted: {
    path: accountPath,
    apiId: "ka10075",
    bodyMap: {
      all_stk_tp: "allStkTp",
      trde_tp: "trdeTp",
      stex_tp: "stexTp",
      stk_cd: "stkCd",
    },
    requiredParams: ["allStkTp", "trdeTp", "stexTp"],
  },
  dailyBalanceYield: {
    path: accountPath,
    apiId: "ka01690",
    bodyMap: {
      qry_dt: "qryDt",
    },
    requiredParams: ["qryDt"],
  },
} satisfies Record<string, KiwoomEndpointDefinition>;

export type KiwoomDepositBalanceDetailsInput = KiwoomEndpointInput & {
  qryTp: string;
};

export type KiwoomAccountEvaluationBalanceDetailsInput = KiwoomEndpointInput & {
  qryTp: string;
  dmstStexTp: string;
};

export type KiwoomUnexecutedInput = KiwoomEndpointInput & {
  allStkTp: string;
  trdeTp: string;
  stexTp: string;
  stkCd?: string;
};

export type KiwoomDailyBalanceYieldInput = KiwoomEndpointInput & {
  qryDt: string;
};

export class KiwoomDomesticAccountClient {
  constructor(private readonly http: KiwoomHttpClient) {}

  getDepositBalanceDetails(
    input: KiwoomDepositBalanceDetailsInput,
  ): Promise<KiwoomHttpResponse<KiwoomDepositBalanceDetails>> {
    return this.http.invoke(definitions.depositBalanceDetails, input);
  }

  getAccountEvaluationBalanceDetails(
    input: KiwoomAccountEvaluationBalanceDetailsInput,
  ): Promise<KiwoomHttpResponse<KiwoomAccountEvaluationBalanceDetails>> {
    return this.http.invoke(definitions.accountEvaluationBalanceDetails, input);
  }

  getUnexecuted(
    input: KiwoomUnexecutedInput,
  ): Promise<KiwoomHttpResponse<KiwoomUnexecutedOrders>> {
    return this.http.invoke(definitions.unexecuted, input);
  }

  getDailyBalanceYield(
    input: KiwoomDailyBalanceYieldInput,
  ): Promise<KiwoomHttpResponse<KiwoomDailyBalanceYield>> {
    return this.http.invoke(definitions.dailyBalanceYield, input);
  }
}
