import { css, html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"
import invariant from "tiny-invariant"

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
        <h1>Login Page</h1>
        <slot></slot>
      </main>
    `
  }

  static styles = css`
    :host main {
      background-color: var(--bg-1);
    }
  `
}
