const topPanel = document.querySelector<HTMLElement>("#top-panel")

if (topPanel) {
  topPanel.style.display = "none"
}

const completionProgress = document.querySelector(
  'section[data-block="completion_progress"]',
)

console.log(completionProgress)
