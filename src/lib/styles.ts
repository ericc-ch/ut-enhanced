import { css, unsafeCSS, type CSSResultGroup, type LitElement } from "lit"

import styleString from "../styles/reset.css"

export const resetStyles = css`
  ${unsafeCSS(styleString)}
`

export function reset(
  _: undefined,
  _context: ClassFieldDecoratorContext<typeof LitElement, CSSResultGroup>,
) {
  console.log({ _context })

  return (initial: CSSResultGroup): CSSResultGroup => {
    console.log({ initial })
    return Array.isArray(initial) ?
        [resetStyles, ...initial]
      : [resetStyles, initial]
  }
}
