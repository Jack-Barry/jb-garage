import { isEmptyObject } from '../../../../utils-generic/src'
import { BsJsStyles, LiteralUnion } from '../../_types'
import { ALL_BREAKPOINTS_KEY } from '../constants'
import { emptyStyles } from '../utils/emptyStyles'

type BootstrapTextAlign = LiteralUnion<'start' | 'center' | 'end', string>

type BootstrapTextWrap = LiteralUnion<'wrap' | 'no-wrap', string>

type BootstrapTextTransform = LiteralUnion<'lowercase' | 'uppercase' | 'capitalize', string>

type BootstrapTextFontSize = LiteralUnion<'1' | '2' | '3' | '4' | '5' | '6', string | number>

type BootstrapTextFontWeight = LiteralUnion<
  'bold' | 'bolder' | 'semibold' | 'medium' | 'normal' | 'light' | 'lighter',
  string | number
>

type BootstrapTextFontStyle = LiteralUnion<'italic' | 'normal', string>

type BootstrapTextLineHeight = LiteralUnion<'1' | 'sm' | 'base' | 'lg', string | number>

type BootstrapTextDecoration = LiteralUnion<'underline' | 'line-through' | 'none', string>

export type BsJsTextOptions = {
  align?: BootstrapTextAlign // is responsive
  wrap?: boolean | BootstrapTextWrap
  break?: boolean
  transform?: BootstrapTextTransform
  size?: BootstrapTextFontSize
  weight?: BootstrapTextFontWeight
  style?: BootstrapTextFontStyle
  lineHeight?: BootstrapTextLineHeight
  monospace?: boolean
  resetColor?: boolean
  decoration?: BootstrapTextDecoration
}

export function bsJsTextStyles(breakpoint: string, options?: BsJsTextOptions): BsJsStyles | null {
  if (!options || isEmptyObject(options)) {
    return null
  }

  const styles = emptyStyles()

  if (options.align) {
    if (breakpoint === ALL_BREAKPOINTS_KEY) {
      styles.classes[`text-${options.align}`] = true
    } else {
      styles.classes[`text-${breakpoint}-${options.align}`] = true
      return styles
    }
  }

  if (typeof options.wrap === 'boolean') {
    styles.classes[`text-${options.wrap ? 'wrap' : 'nowrap'}`] = true
  } else if (typeof options.wrap === 'string') {
    styles.classes[`text-${options.wrap}`] = true
  }

  if (typeof options.break === 'boolean') {
    styles.classes['text-break'] = options.break
  }

  if (options.transform) {
    styles.classes[`text-${options.transform}`] = true
  }

  if (typeof options.size !== 'undefined') {
    styles.classes[`fs-${options.size}`] = true
  }

  if (typeof options.weight !== 'undefined') {
    styles.classes[`fw-${options.weight}`] = true
  }

  if (options.style) {
    styles.classes[`fst-${options.style}`] = true
  }

  if (typeof options.lineHeight !== 'undefined') {
    styles.classes[`lh-${options.lineHeight}`] = true
  }

  if (options.monospace) {
    styles.classes['font-monospace'] = true
  }

  if (options.resetColor) {
    styles.classes['text-reset'] = true
  }

  if (options.decoration) {
    styles.classes[`text-decoration-${options.decoration}`] = true
  }

  return styles
}
