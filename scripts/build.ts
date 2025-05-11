import fs from "node:fs"
import path from "node:path"
import { x } from "tinyexec"

import { meta } from "../src/meta"

const outdir = path.join(import.meta.dirname, "..", "dist")
const outfile = path.join(outdir, "ut-enhancer.user.js")
const entry = path.join(import.meta.dirname, "..", "src", "main.ts")

const createDir = () => fs.mkdirSync(outdir, { recursive: true })
const deleteDir = () => {
  if (!fs.existsSync(outdir)) return

  for (const file of fs.readdirSync(outdir)) {
    const curPath = path.join(outdir, file)
    fs.rmSync(curPath, { recursive: true, force: true })
  }
}

try {
  createDir()
  deleteDir()
} catch {
  console.error("Failed to clean build directory")
}

const result = await x("bun", [
  "build",
  "--target",
  "browser",
  "--format",
  "esm",
  // "--minify",
  "--outfile",
  outfile,
  "--banner",
  meta,
  entry,
])

process.stdout.write(result.stdout)
process.stderr.write(result.stderr)
