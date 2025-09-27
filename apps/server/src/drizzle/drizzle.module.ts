import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { TOKENS } from "@/common/constants";
import * as drizzleSchemas from "@/drizzle/drizzle.schema";

@Module({
  providers: [
    {
      provide: TOKENS.DRIZZLE,
      useFactory: (configService: ConfigService) => {
        return drizzle({
          casing: "snake_case",
          connection: {
            url: configService.getOrThrow("DATABASE_URL"),
          },
          schema: {
            ...drizzleSchemas.shcemas,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [TOKENS.DRIZZLE],
})
export class DrizzleModule {}
