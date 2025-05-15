import invariant from "tiny-invariant"

import { hideElement } from "../lib/dom"

export const loginRegex = /^\/login\/index\.php$/

export function loginScript() {
  console.log("Login page script is running.")

  const unusedMenus = document.querySelector<HTMLElement>("#page-a")
  if (unusedMenus) hideElement(unusedMenus)

  const topSocials = document.querySelector<HTMLElement>("#top-panel")
  const bottomSocials = document.querySelector<HTMLElement>("#bottom-info")
  if (topSocials) hideElement(topSocials)
  if (bottomSocials) hideElement(bottomSocials)

  const pageB = document.querySelector<HTMLElement>("#page-b")
  invariant(pageB, "Page B not found")

  const header = pageB.querySelector<HTMLElement>("#page-header")
  const subheader = pageB.querySelector<HTMLElement>("#subheader")
  if (header) hideElement(header)
  if (subheader) hideElement(subheader)

  const mainContent = pageB.querySelector<HTMLElement>("#main-content")
  invariant(mainContent, "Main content not found")
}
