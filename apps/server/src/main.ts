import { NestFactory } from "@nestjs/core";
import { AppModule } from "@/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
    cors: {
      methods: "*",
      allowedHeaders: "*",
      origin: "http://localhost:10000",
      credentials: true,
    },
  });

  app.setGlobalPrefix("/api");

  await app.listen(process.env.PORT ?? 10001);
}
bootstrap();
