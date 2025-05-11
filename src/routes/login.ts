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
}
