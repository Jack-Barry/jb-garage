import { CSSProperties } from 'react'

export type BrStyles = { className?: string | Record<string, boolean>; style?: CSSProperties }

/**
 * Translates an array of provided `BrStyles` objects into combined `className`
 *   and `style` values that can be passed to a component as props
 */
export function buildBrStyles(styles: BrStyles[]) {
  const finalStyles: { className: Record<string, boolean>; style: CSSProperties } = {
    className: {},
    style: {}
  }

  for (const { className, style } of styles) {
    if (typeof className === 'string') {
      finalStyles.className[className] = true
    } else {
      finalStyles.className = { ...finalStyles.className, ...className }
    }

    finalStyles.style = { ...finalStyles.style, ...style }
  }

  return finalStyles
}
