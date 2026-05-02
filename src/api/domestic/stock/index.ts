import type { KiwoomHttpClient } from "../../../http";
import type {
  KiwoomEndpointDefinition,
  KiwoomEndpointInput,
  KiwoomHttpResponse,
  KiwoomRecord,
} from "../../../types";

export type KiwoomStockSearchRanking = KiwoomRecord & {
  itemInqRank?: KiwoomRecord[];
};

const definitions = {
  stockSearchRanking: {
    path: "/api/dostk/stkinfo",
    apiId: "ka00198",
    bodyMap: {
      qry_tp: "qryTp",
    },
    requiredParams: ["qryTp"],
  },
} satisfies Record<string, KiwoomEndpointDefinition>;

export type KiwoomStockSearchRankingInput = KiwoomEndpointInput & {
  qryTp: "1" | "2" | "3" | "4" | "5";
};

export class KiwoomDomesticStockClient {
  constructor(private readonly http: KiwoomHttpClient) {}

  getStockSearchRanking(
    input: KiwoomStockSearchRankingInput,
  ): Promise<KiwoomHttpResponse<KiwoomStockSearchRanking>> {
    return this.http.invoke(definitions.stockSearchRanking, input);
  }
}
