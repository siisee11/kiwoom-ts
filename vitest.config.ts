import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    test: {
      globals: true,
      environment: "node",
      testTimeout: 10000,
      env: env,
    },
  };
});
