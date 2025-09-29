import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["lib/*.ts", "schema/*.ts"],
  format: "esm",
  dts: {
    sourcemap: true,
  },
});
