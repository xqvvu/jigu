// Base Result type for API responses
export interface Result<T = any> {
  code: ServiceCode;
  message?: string;
  data?: T;
}

// Service response codes
export enum ServiceCode {
  OK = 0,
  ERROR = 1,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

// Auth related types
export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  user: User;
  tokens: AuthTokens;
}
