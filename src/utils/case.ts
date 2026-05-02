const snakeToCamel = (value: string) =>
  value.replace(/_([a-z0-9])/g, (_, char: string) => char.toUpperCase());

export const camelizeKeys = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(camelizeKeys);
  if (!value || typeof value !== "object") return value;

  return Object.fromEntries(
    Object.entries(value).map(([key, entryValue]) => [
      snakeToCamel(key),
      camelizeKeys(entryValue),
    ]),
  );
};

export const normalizeHeaders = (headers: Headers) =>
  Object.fromEntries(
    [...headers.entries()].map(([key, value]) => [key.toLowerCase(), value]),
  );

export const getHeaderValue = (headers: Headers, name: string) =>
  headers.get(name) ?? headers.get(name.toLowerCase()) ?? "";
