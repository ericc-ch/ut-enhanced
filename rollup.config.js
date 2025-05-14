import { nodeResolve } from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"
import typescript from "@rollup/plugin-typescript"
import { defineConfig } from "rollup"
import del from "rollup-plugin-delete"

export default defineConfig({
  input: "src/main.ts",
  output: {
    file: "dist/ut-enhanced.user.js",
    format: "iife",
    banner: meta({
      name: "ut-enhanced",
      namespace: "Violentmonkey Scripts",
      description: "Make elearning.ut.ac.id better.",
      match: "https://elearning.ut.ac.id/*",
      version: "0.0.0",
      author: "Erick Christian",
    }),
  },
  plugins: [
    typescript(),
    nodeResolve({
      browser: true,
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    del({ targets: ["dist/"] }),
  ],
})

/**
 *
 * @param {Record<string, string>} record
 */
function meta(record) {
  let content = ""

  for (const [key, value] of Object.entries(record)) {
    content += `// @${key} ${value}\n`
  }

  return "// ==UserScript==\n" + content + "// ==/UserScript==\n"
}
