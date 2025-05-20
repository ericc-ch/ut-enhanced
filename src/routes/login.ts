import { css, html, LitElement, type CSSResultGroup } from "lit"
import { customElement } from "lit/decorators.js"
import invariant from "tiny-invariant"

import { resetCSS } from "../lib/styles"

export const loginRegex = /^\/login\/index\.php$/

export function loginScript() {
  console.log("Login page script is running.")

  const pageOuter = document.querySelector<HTMLElement>("#page-outer")
  invariant(pageOuter, "Page outer not found")

  const loginForm = pageOuter.querySelector<HTMLElement>(
    "#main-content .loginleft",
  )
  invariant(loginForm, "Login form not found")

  pageOuter.remove()

  const loginPage = document.createElement("login-page")
  loginPage.append(loginForm)

  document.body.append(loginPage)
}

@customElement("login-page")
export class LoginPage extends LitElement {
  render() {
    return html`
      <main>
        <div class="login-container">
          <slot></slot>
        </div>
      </main>
    `
  }

  static styles: CSSResultGroup = [
    resetCSS,
    css`
      :host main {
        background-color: var(--bg-1);

        min-height: 100svh;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
      }

      :host .login-container {
        background-color: var(--bg-2);

        padding-block: 2rem;
        padding-inline: 1rem;

        box-shadow: var(--shadow-1);
        border-radius: 0.5rem;
      }
    `,
  ]
}

console.log(LoginPage.styles)
