import ts from "@rollup/plugin-typescript";

export const config = [
  {
    input: "./src/index.ts",
    output: [{
      dir: "./dist",
      format: "cjs",
      exports: "named",
      preserveModules: true,
      sourcemap: false,
      entryFileNames: "[name].js",
    }],
    plugins: [ts()],
    external: ["fs"]
  }
]

export default config