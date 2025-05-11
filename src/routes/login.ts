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

  const mainContent = document.querySelector<HTMLElement>("#page-b")
  invariant(mainContent)

  const header = mainContent.querySelector<HTMLElement>("#page-header")
  const subheader = mainContent.querySelector<HTMLElement>("#subheader")
  if (header) hideElement(header)
  if (subheader) hideElement(subheader)

  // Rather than this, lets create a new container using lit
  // Then move this into the new container
  // Better than manual re-arranging
  mainContent.style.height = "100%"
}
