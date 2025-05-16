import "./styles/global.css"
import "./styles/theme.css"
import { loginRegex, loginScript } from "./routes/login"

const completionProgress = document.querySelector(
  'section[data-block="completion_progress"]',
)

console.log(completionProgress)

// 1. Define your script functions
function loadHomepageScript() {
  console.log("Homepage script is running.")
  // Add homepage specific logic here
}

function loadUserProfileScript(path: string) {
  console.log(`User profile script is running for path: ${path}`)
  // Add user profile specific logic here
  // Example: extract userID if path is /profile/some-user-id
  // const match = path.match(/^\/profile\/([a-zA-Z0-9_-]+)$/);
  // if (match && match[1]) {
  //   const userId = match[1];
  //   console.log(`User ID: ${userId}`);
  // }
}

function loadSettingsScript() {
  console.log("Settings page script is running.")
  // Add settings page specific logic here
}

// 2. Create a Map to associate regex path patterns with scripts
const routeScriptMap = new Map<RegExp, (path: string) => void>()

// Add routes using Regular Expressions
routeScriptMap.set(/^\/$/, loadHomepageScript) // Matches the root path exactly: /
routeScriptMap.set(/^\/profile\/.*$/, loadUserProfileScript) // Matches any path starting with /profile/
routeScriptMap.set(/^\/settings$/, loadSettingsScript) // Matches /settings exactly
routeScriptMap.set(loginRegex, loginScript) // Matches /login/index.php exactly

// 3. Implement a route handler function
function handleRouteChange(): void {
  const currentPath = globalThis.location.pathname
  console.log(`Attempting to handle route for: ${currentPath}`)

  let scriptExecuted = false
  for (const [pathRegex, scriptFunction] of routeScriptMap) {
    if (pathRegex.test(currentPath)) {
      scriptFunction(currentPath) // Pass the current path to the script
      scriptExecuted = true
      break // Found and executed, no need to check further
    }
  }

  if (!scriptExecuted) {
    console.log("No specific script found for this path.")
  }
}

// 4. Initial check on page load ("first mount")
// Ensure the DOM is ready before trying to manipulate it or run scripts
// that depend on it.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", handleRouteChange)
} else {
  // DOMContentLoaded has already fired
  handleRouteChange()
}
