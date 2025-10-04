import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });

  const configService = app.get(ConfigService);

  const globalPrefix = configService.getOrThrow<string>("GLOBAL_PREFIX", "api");
  app.setGlobalPrefix(globalPrefix);

  app.enableCors({
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "Origin",
      "X-Requested-With",
      "X-CSRF-Token",
      "X-Request-Id",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    origin: configService
      .getOrThrow<string>("CORS_ALLOWED_ORIGINS")
      ?.split(",")
      .filter(Boolean)
      .map((origin) => origin.trim()),
  });

  const port = configService.getOrThrow<number>("PORT", 10001);
  await app.listen(port, () => {
    console.info(`Listening at http://localhost:${port}`);
  });
}
bootstrap();
