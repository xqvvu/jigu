import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from "@nestjs/common";
import { APIError } from "better-auth";
import { Response } from "express";
import { NormalizedExceptionResponse } from "@/@types/exceptions";
import { NormalizedException } from "@/exceptions/normalized.exception";
import { R } from "@/lib/result";

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // our manually throw the `NormalizedException`
    if (exception instanceof NormalizedException) {
      const status = exception.getStatus();
      const e = exception.getResponse() as NormalizedExceptionResponse;
      return response.status(status).json(R.fail(e.errcode, e.errmsg));
    }

    // system builtins which throw the `HttpException`
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      // builtin pipes' exception response
      const e = exception.getResponse() as {
        error: string;
        message: string;
        statusCode: number;
      };
      return response.status(status).json(R.fail(-2, e.message));
    }

    // BetterAuth's `InternalAPIError`
    if (exception instanceof APIError) {
      return response
        .status(exception.statusCode)
        .json(R.fail(-3, exception.message));
    }
  }
}
