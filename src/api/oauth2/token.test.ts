import { afterEach, describe, expect, it, vi } from "vitest";
import { issueAccessToken, type KiwoomOAuthTokenRequest } from "./token";

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
    vi.restoreAllMocks();
  });

  it("should issue access token successfully (Real)", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(
        new Response(JSON.stringify(successResponse), { status: 200 }),
      );

    const result = await issueAccessToken(dummyRequest);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.kiwoom.com/oauth2/token",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify(dummyRequest),
      }),
    );
    expect(result).toEqual(successResponse);
  });

  it("should issue access token successfully (Mock)", async () => {
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(
        new Response(JSON.stringify(successResponse), { status: 200 }),
      );

    const result = await issueAccessToken(dummyRequest, true);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://mockapi.kiwoom.com/oauth2/token",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify(dummyRequest),
      }),
    );
    expect(result).toEqual(successResponse);
  });

  it("should throw error when API call fails", async () => {
    const errorResponse = { error: "invalid_grant" };
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify(errorResponse), { status: 400 }),
    );

    await expect(issueAccessToken(dummyRequest)).rejects.toThrow(
      "Invalid Kiwoom token request.",
    );
  });
});
