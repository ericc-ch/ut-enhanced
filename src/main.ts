import "./styles/global.css"
import "./styles/theme.css"
import "./lib/styles"
import { loginRegex, loginScript } from "./routes/login"

const routes: Array<[RegExp, () => void]> = []

routes.push([loginRegex, loginScript])

function handleRouteChange(): void {
  const currentPath = globalThis.location.pathname
  console.log(`Attempting to handle route for: ${currentPath}`)

  for (const [pathRegex, scriptFunction] of routes) {
    if (pathRegex.test(currentPath)) {
      scriptFunction()
      break
    }
  }
}

// Ensure the DOM is ready before trying to manipulate it
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", handleRouteChange)
} else {
  // DOMContentLoaded has already fired
  handleRouteChange()
}
