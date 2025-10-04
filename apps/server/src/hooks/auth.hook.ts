import { Injectable } from "@nestjs/common";
import {
  AfterHook,
  type AuthHookContext,
  Hook,
} from "@thallesp/nestjs-better-auth";
import { APIError } from "better-auth";
import { NormalizedException } from "@/exceptions/normalized.exception";
import { R } from "@/lib/result";

@Hook()
@Injectable()
export class AuthHook {
  @AfterHook()
  async handle(ctx: AuthHookContext) {
    const returned = ctx.context.returned;
    if (returned === null) return;
    if (
      typeof returned === "object" &&
      (returned as APIError).name === "APIError"
    ) {
      const error = returned as APIError;
      throw new NormalizedException({
        errcode: -3,
        errmsg: error.message,
        status: error.statusCode,
      });
    }
    ctx.context.returned = R.ok(returned);
  }
}
