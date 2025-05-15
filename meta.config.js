/**
 * ViolentMonkey meta builder. Used as user script banner
 * @param {Record<string, string>} record
 */
function metaBuilder(record) {
  let content = ""

  for (const [key, value] of Object.entries(record)) {
    content += `// @${key} ${value}\n`
  }

  return "// ==UserScript==\n" + content + "// ==/UserScript==\n"
}

export default metaBuilder({
  grant: "none",
  name: "ut-enhanced",
  namespace: "Violentmonkey Scripts",
  description: "Make elearning.ut.ac.id better.",
  match: "https://elearning.ut.ac.id/*",
  version: "0.0.0",
  author: "Erick Christian",
})
