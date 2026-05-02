export class KiwoomApiError extends Error {
  constructor(
    message: string,
    readonly status?: number,
    readonly responseBody?: unknown,
  ) {
    super(message);
    this.name = "KIWOOM_API_ERROR";
  }
}

export class KiwoomValidationError extends KiwoomApiError {
  constructor(message: string) {
    super(message, 400);
    this.name = "KIWOOM_VALIDATION_ERROR";
  }
}

export class KiwoomAuthenticationError extends KiwoomApiError {
  constructor(message: string, status?: number, responseBody?: unknown) {
    super(message, status, responseBody);
    this.name = "KIWOOM_AUTHENTICATION_ERROR";
  }
}

export const isKiwoomAuthFailure = (error: unknown) =>
  error instanceof KiwoomAuthenticationError ||
  (error instanceof KiwoomApiError &&
    (error.status === 401 || error.status === 403));
