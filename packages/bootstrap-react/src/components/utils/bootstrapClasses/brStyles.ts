import { CSSProperties } from 'react'

export type BrStyles = { classes?: Record<string, boolean>; inlineStyles?: CSSProperties }

/**
 * Translates an array of provided `BrStyles` objects into combined `className`
 *   and `style` values that can be passed to a component as props
 */
export function buildBrStyles(styles: BrStyles[]) {
  const finalStyles: { classes: Record<string, boolean>; inlineStyles: CSSProperties } = {
    classes: {},
    inlineStyles: {}
  }

  for (const { classes, inlineStyles } of styles) {
    if (typeof classes === 'string') {
      finalStyles.classes[classes] = true
    } else {
      finalStyles.classes = { ...finalStyles.classes, ...classes }
    }

    finalStyles.inlineStyles = { ...finalStyles.inlineStyles, ...inlineStyles }
  }

  return finalStyles
}
