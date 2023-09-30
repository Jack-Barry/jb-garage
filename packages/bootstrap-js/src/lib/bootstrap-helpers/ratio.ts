import { BsJsStyles, LiteralUnion } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsRatio = LiteralUnion<'1x1' | '4x3' | '16x9' | '21x9', string>
export type BsJsRatioOptions =
  | BsJsRatio
  | {
      /**
       * If your ratio is not part of compiled Sass, you can set it as a custom
       *  value to use a CSS variable instead of a class name
       */
      custom: string
    }

export function bsJsRatioStyles(prefix: string, ratio?: BsJsRatioOptions): BsJsStyles | null {
  if (!ratio) {
    return null
  }

  const styles = emptyStyles()
  styles.classes = {
    ratio: true
  }

  if (typeof ratio === 'string') {
    styles.classes[`ratio-${ratio}`] = true
  } else {
    styles.inlineStyles[`--${prefix}-aspect-ratio`] = ratio.custom
  }

  return styles
}
