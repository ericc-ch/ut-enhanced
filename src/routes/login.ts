import { css, html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"
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

  const loginContainer = document.createElement("login-container")
  loginContainer.innerHTML = `<login-form></login-form>`
  mainContent.append(loginContainer)
}

@customElement("login-container")
export class LoginContainer extends LitElement {
  static styles = css`
    div {
      display: flex;
      height: 100vh;
    }
  `

  render() {
    return html`<div>
      <slot></slot>
    </div> `
  }
}
