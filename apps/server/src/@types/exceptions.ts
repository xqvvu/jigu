import { ErrorResult } from "@jigu/ky/server";
import { HttpStatus } from "@nestjs/common";

export type NormalizedExceptionResponse = Omit<
  Partial<ErrorResult>,
  "status"
> & {
  status?: HttpStatus;
};
