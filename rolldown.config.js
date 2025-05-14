import { defineConfig } from "rolldown"
import del from "rollup-plugin-delete"

import meta from "./meta.config.js"

export default defineConfig({
  input: "src/main.ts",
  output: {
    file: "dist/ut-enhanced.user.js",
    format: "iife",
    banner: meta,
  },
  plugins: [del({ targets: ["dist/"] })],
})
