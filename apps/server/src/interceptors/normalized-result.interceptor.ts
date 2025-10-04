import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { R } from "@/lib/result";

export class NormalizedResultInterceptor implements NestInterceptor {
  intercept(
    _ctx: ExecutionContext,
    next: CallHandler<unknown>,
  ): Observable<unknown> | Promise<Observable<unknown>> {
    return next.handle().pipe(map((data) => R.ok(data)));
  }
}
