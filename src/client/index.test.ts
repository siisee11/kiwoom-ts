import { beforeEach, describe, expect, it, vi } from "vitest";
import type { KiwoomOAuthTokenResponse } from "../api/oauth2/token";
import { KiwoomClient } from "./index";

describe("KiwoomClient", () => {
  let client: KiwoomClient;
  const appKey = "test-app-key";
  const appSecret = "test-app-secret";
  const fetchMock = vi.fn<typeof fetch>();

  beforeEach(() => {
    fetchMock.mockReset();
    client = new KiwoomClient({
      appKey,
      appSecret,
      env: "demo",
      fetchImpl: fetchMock,
    });
    vi.restoreAllMocks();
  });

  it("should be instantiated with credentials", () => {
    expect(client).toBeInstanceOf(KiwoomClient);
  });

  it("should call issueAccessToken with correct credentials", async () => {
    const mockResponse: KiwoomOAuthTokenResponse = {
      expires_dt: "20230101000000",
      token_type: "Bearer",
      token: "test-token",
    };

    fetchMock.mockResolvedValueOnce(
      new Response(JSON.stringify(mockResponse), { status: 200 }),
    );

    const response = await client.issueAccessToken();

    expect(fetchMock).toHaveBeenCalledWith(
      "https://mockapi.kiwoom.com/oauth2/token",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          grant_type: "client_credentials",
          appkey: appKey,
          secretkey: appSecret,
        }),
      }),
    );
    expect(response).toEqual(mockResponse);
  });

  it("should auto issue and reuse tokens for domain clients", async () => {
    fetchMock
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            expires_dt: "29991231235959",
            token_type: "Bearer",
            token: "auto-token",
          }),
          { status: 200 },
        ),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            return_code: 0,
            entr: "10000",
            stk_entr_prst: [{ stk_cd: "005930" }],
          }),
          {
            status: 200,
            headers: { "cont-yn": "N", "next-key": "" },
          },
        ),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            return_code: 0,
            item_inq_rank: [{ stk_cd: "005930" }],
          }),
          { status: 200 },
        ),
      );

    const account = await client.domesticAccount.getDepositBalanceDetails({
      qryTp: "1",
    });
    const ranking = await client.domesticStock.getStockSearchRanking({
      qryTp: "1",
    });

    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(fetchMock.mock.calls[1][0]).toBe(
      "https://mockapi.kiwoom.com/api/dostk/acnt",
    );
    expect(fetchMock.mock.calls[1][1]?.headers).toMatchObject({
      authorization: "Bearer auto-token",
      "api-id": "kt00001",
    });
    expect(fetchMock.mock.calls[1][1]?.body).toBe(
      JSON.stringify({ qry_tp: "1" }),
    );
    expect(account.body).toMatchObject({
      entr: "10000",
      stkEntrPrst: [{ stkCd: "005930" }],
    });
    expect(ranking.body).toMatchObject({
      itemInqRank: [{ stkCd: "005930" }],
    });
  });
});
