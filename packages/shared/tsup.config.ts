import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/lib/*.ts", "src/schema/*.ts"],
  format: "esm",
  dts: true,
  clean: true,
  minify: true,
  sourcemap: true,
});
