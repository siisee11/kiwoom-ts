import type { KiwoomEnv } from "../types";

export const KIWOOM_REAL_BASE_URL = "https://api.kiwoom.com";
export const KIWOOM_DEMO_BASE_URL = "https://mockapi.kiwoom.com";

export const getKiwoomBaseUrl = (env: KiwoomEnv = "real") =>
  env === "real" ? KIWOOM_REAL_BASE_URL : KIWOOM_DEMO_BASE_URL;
