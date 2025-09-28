import { Module } from "@nestjs/common";
import { TOKENS } from "@/common/constants";
import { db } from "@/drizzle/db";

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
