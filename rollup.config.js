import ts from "@rollup/plugin-typescript";

export const config = [
  {
    input: "./src/index.ts",
    output: [{
      dir: "./dist",
      format: "esm",
      exports: "named",
      preserveModules: true,
      sourcemap: false,
      entryFileNames: "[name].mjs",
    }],
    plugins: [ts()],
    external: ["fs"]
  }
]

export default config