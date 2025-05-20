import { css, unsafeCSS } from "lit"

import resetStyle from "../styles/reset.css"

export const resetCSS = css`
  ${unsafeCSS(resetStyle)}
`
