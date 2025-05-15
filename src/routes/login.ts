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
  document.body.append(loginForm)
}
