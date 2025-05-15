import { nodeResolve } from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"
import swc from "@rollup/plugin-swc"
import { defineConfig } from "rollup"
import del from "rollup-plugin-delete"
import postcss from "rollup-plugin-postcss"

import meta from "./meta.config.js"

export default defineConfig({
  input: "src/main.ts",
  output: {
    file: "dist/ut-enhanced.user.js",
    format: "iife",
    banner: meta,
  },
  plugins: [
    del({ targets: ["dist/*"] }),
    replace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
    }),
    nodeResolve({
      browser: true,
      extensions: [".ts", ".js"],
    }),
    swc(),
    postcss(),
  ],
})
