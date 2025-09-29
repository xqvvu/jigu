import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/web.ts", "src/server.ts"],
  format: "esm",
  dts: true,
  clean: true,
  sourcemap: true,
});
