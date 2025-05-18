import { css, type CSSResult, type CSSResultGroup, type LitElement } from "lit"

import styleString from "../styles/reset.css"

const resetStyles = css(styleString as unknown as TemplateStringsArray)

export function reset(
  target: CSSResultGroup,
  context: ClassFieldDecoratorContext<LitElement, CSSResult>,
) {
  if (!context.static)
    throw new Error("@reset can only be used on static styles")

  if (Array.isArray(target)) {
    target.push(resetStyles)
    return target
  }

  return [resetStyles, target]
}
