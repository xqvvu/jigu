import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib/*.ts", "schema/*.ts"],
  format: "esm",
  dts: true,
  clean: true,
  sourcemap: true,
});
