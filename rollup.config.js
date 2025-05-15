import { nodeResolve } from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"
import typescript from "@rollup/plugin-typescript"
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
    typescript(),
    postcss(),
    nodeResolve({
      browser: true,
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    del({ targets: ["dist/*"] }),
  ],
})
