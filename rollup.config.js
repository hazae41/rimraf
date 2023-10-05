import ts from "@rollup/plugin-typescript";
import externals from "rollup-plugin-node-externals";

export const config = [
  {
    input: "./src/index.ts",
    output: [{
      dir: "./dist",
      format: "esm",
      exports: "named",
      preserveModules: true,
      sourcemap: false,
      entryFileNames: "[name].js",
    },],
    plugins: [externals(), ts()]
  }
]

export default config