import "./styles/global.css"
import "./styles/theme.css"
import "./lib/styles"
import { dashboardRegex, dashboardScript } from "./routes/dashboard"
import { loginRegex, loginScript } from "./routes/login"

const routes: Array<[RegExp, () => void]> = []

routes.push([loginRegex, loginScript])
routes.push([dashboardRegex, dashboardScript])

function handleRouteChange(): void {
  const currentPath = globalThis.location.pathname
  console.log(`Attempting to handle route for: ${currentPath}`)
  let routeMatched = false

  for (const [pathRegex, scriptFunction] of routes) {
    if (pathRegex.test(currentPath)) {
      scriptFunction()
      routeMatched = true
      break
    }
  }

  if (!routeMatched) {
    console.log(`No matching script found for route: ${currentPath}`)
  }
}

// Ensure the DOM is ready before trying to manipulate it
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", handleRouteChange)
} else {
  // DOMContentLoaded has already fired
  handleRouteChange()
}
