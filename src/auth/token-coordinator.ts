import type { KiwoomAuth } from ".";

const TOKEN_EXPIRY_BUFFER_MS = 60_000;

export const parseKiwoomExpiresAtMs = (expiresDt?: string) => {
  if (!expiresDt) return null;

  const compactMatch = expiresDt.match(
    /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/,
  );
  if (compactMatch) {
    const [, year, month, day, hour, minute, second] = compactMatch;
    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minute),
      Number(second),
    ).getTime();
  }

  const parsed = Date.parse(expiresDt);
  return Number.isFinite(parsed) ? parsed : null;
};

export const createKiwoomTokenCoordinator = (
  auth: KiwoomAuth,
  initialToken?: string,
) => {
  let token: string | null = initialToken ?? null;
  let expiresAtMs: number | null = null;
  let inFlightTokenPromise: Promise<string> | null = null;

  const tokenIsFresh = () =>
    Boolean(
      token &&
        (expiresAtMs === null ||
          Date.now() + TOKEN_EXPIRY_BUFFER_MS < expiresAtMs),
    );

  const runOnce = (loader: () => Promise<string>) => {
    if (inFlightTokenPromise) return inFlightTokenPromise;
    inFlightTokenPromise = loader().finally(() => {
      inFlightTokenPromise = null;
    });
    return inFlightTokenPromise;
  };

  const loadFreshToken = () =>
    runOnce(async () => {
      const next = await auth.generateToken();
      token = next.token;
      expiresAtMs = parseKiwoomExpiresAtMs(next.expiresDt);
      return next.token;
    });

  return {
    ensure: async () => {
      if (tokenIsFresh() && token) return token;
      return loadFreshToken();
    },
    refresh: async () => {
      token = null;
      expiresAtMs = null;
      return loadFreshToken();
    },
    set: (nextToken: string, expiresDt?: string) => {
      token = nextToken;
      expiresAtMs = parseKiwoomExpiresAtMs(expiresDt);
    },
    reset: () => {
      token = null;
      expiresAtMs = null;
    },
  };
};
