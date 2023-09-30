import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

export type BsJsIconLinkOptions =
  | true
  | {
      /**
       * Set to `true` for default transform on hover, or provide a custom transform
       *   to use, e.g. `"translate3d(0, -.125rem, 0)"`
       */
      hoverTransform?: true | string
    }

export function bsJsIconLinkStyles(
  prefix: string,
  options?: BsJsIconLinkOptions
): BsJsStyles | null {
  if (!options) {
    return null
  }

  const styles = emptyStyles()
  styles.classes['icon-link'] = true
  if (typeof options === 'boolean') {
    return styles
  }

  if (options.hoverTransform) {
    styles.classes['icon-link-hover'] = true
  }

  if (typeof options.hoverTransform === 'string') {
    styles.inlineStyles[`--${prefix}-icon-link-transform`] = options.hoverTransform
  }

  return styles
}
