import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    client: "src/client.ts",
    server: "src/server.ts",
  },
  dts: {
    sourcemap: true,
  },
});
