import { db } from "@jigu/shared/lib/db";
import { Module } from "@nestjs/common";
import { TOKENS } from "@/common/constants";

@Module({
  providers: [
    {
      provide: TOKENS.DRIZZLE,
      useValue: db,
    },
  ],
  exports: [TOKENS.DRIZZLE],
})
export class DrizzleModule {}
