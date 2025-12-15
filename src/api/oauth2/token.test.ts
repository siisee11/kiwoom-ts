import { describe, it, expect, vi, afterEach } from "vitest";
import nock from "nock";
import { issueAccessToken, KiwoomOAuthTokenRequest } from "./token";

describe("issueAccessToken", () => {
  const dummyRequest: KiwoomOAuthTokenRequest = {
    grant_type: "client_credentials",
    appkey: "test-app-key",
    secretkey: "test-secret-key",
  };

  const successResponse = {
    expires_dt: "20231231235959",
    token_type: "Bearer",
    token: "test-access-token",
    return_code: 0,
    return_msg: "Success",
  };

  afterEach(() => {
    nock.cleanAll();
  });

  it("should issue access token successfully (Real)", async () => {
    nock("https://api.kiwoom.com")
      .post("/oauth2/token", dummyRequest as any)
      .reply(200, successResponse);

    const result = await issueAccessToken(dummyRequest);

    expect(result).toEqual(successResponse);
  });

  it("should issue access token successfully (Mock)", async () => {
    nock("https://mockapi.kiwoom.com")
      .post("/oauth2/token", dummyRequest as any)
      .reply(200, successResponse);

    const result = await issueAccessToken(dummyRequest, true);

    expect(result).toEqual(successResponse);
  });

  it("should throw error when API call fails", async () => {
    const errorResponse = { error: "invalid_grant" };
    nock("https://api.kiwoom.com")
      .post("/oauth2/token")
      .reply(400, errorResponse);

    await expect(issueAccessToken(dummyRequest)).rejects.toEqual(errorResponse);
  });
});
