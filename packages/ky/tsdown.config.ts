import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    web: "src/web.ts",
    server: "src/server.ts",
  },
  format: "esm",
  dts: {
    sourcemap: true,
  },
});
