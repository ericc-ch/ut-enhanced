import fs from "node:fs"
import path from "node:path"
import { x } from "tinyexec"

import { meta } from "../src/meta"

const outdir = path.join(import.meta.dirname, "..", "dist")
const outfile = path.join(outdir, "ut-enhancer.user.js")
const entry = path.join(import.meta.dirname, "..", "src", "main.ts")

const createDir = () => fs.mkdirSync(outdir, { recursive: true })
const deleteDir = () => {
  fs.rmSync(outdir, { recursive: true, force: true })
}

try {
  deleteDir()
  createDir()
} catch {
  console.error("Failed to clean build directory")
}

const result = await x("bun", [
  "build",
  "--outfile",
  outfile,
  "--banner",
  meta,
  entry,
])

process.stdout.write(result.stdout)
process.stderr.write(result.stderr)
