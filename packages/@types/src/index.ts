import { z } from "zod";

// Service response codes
export const ServiceCode = z.enum([
  "OK",
  "ERROR",
  "UNAUTHORIZED",
  "FORBIDDEN",
  "NOT_FOUND",
  "INTERNAL_ERROR"
]).enum;

export const ServiceCodeNumber = {
  OK: 0,
  ERROR: 1,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
} as const;

export type ServiceCodeType = keyof typeof ServiceCode;

// Base Result type for API responses
export interface Result<T = any> {
  code: ServiceCodeType;
  message?: string;
  data?: T;
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
