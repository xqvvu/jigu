import { HttpException, HttpStatus } from "@nestjs/common";
import { NormalizedExceptionResponse } from "@/@types/exceptions";

export class NormalizedException extends HttpException {
  constructor(options: NormalizedExceptionResponse = {}) {
    const {
      errcode = -1,
      errmsg = "error",
      status = HttpStatus.INTERNAL_SERVER_ERROR,
    } = options;
    super({ errcode, errmsg }, status);
  }
}
