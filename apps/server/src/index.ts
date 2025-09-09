import process from "node:process";
import consola from "consola";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { connectMongo } from "@/db/mongo";
import v1 from "@/routes/v1";

const app = new Hono();

app.use(logger());

async function main() {
  try {
    await connectMongo();

    const { auth } = await import("@/libs/auth");

    app.route("/api/v1", v1);
    app.on(["POST", "GET"], "/api/auth/*", c => auth.handler(c.req.raw));

    const port = Bun.env.SERVER_PORT || 23002;
    const server = Bun.serve({
      fetch: app.fetch,
      port,
    });

    consola.success(`Listen on http://localhost:${port}`);

    return server;
  }
  catch (error) {
    consola.error("Failed to start server:", error);
    throw error;
  }
}

main().catch((error: unknown) => {
  consola.error("Error occurred during start server:", error);
  process.exit(1);
});
