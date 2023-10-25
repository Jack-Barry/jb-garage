import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsBreakpointAgnosticOptions, BsJsStyles } from '../../_types'
import { applyTextTruncationStyles } from '../helpers/textTruncation'

type BootstrapTextAlign = 'start' | 'center' | 'end'

type BootstrapTextWrap = 'wrap' | 'no-wrap'

type BootstrapTextTransform = 'lowercase' | 'uppercase' | 'capitalize'

type BootstrapTextFontSize = '1' | '2' | '3' | '4' | '5' | '6'

type BootstrapTextFontWeight =
  | 'bold'
  | 'bolder'
  | 'semibold'
  | 'medium'
  | 'normal'
  | 'light'
  | 'lighter'

type BootstrapTextFontStyle = 'italic' | 'normal'

type BootstrapTextLineHeight = '1' | 'sm' | 'base' | 'lg'

type BootstrapTextDecoration = 'underline' | 'line-through' | 'none'

export type BsJsTextOptions = {
  align?: LiteralUnion<BootstrapTextAlign, string> // is responsive
  wrap?: boolean | LiteralUnion<BootstrapTextWrap, string>
  break?: boolean
  transform?: LiteralUnion<BootstrapTextTransform, string>
  size?: LiteralUnion<BootstrapTextFontSize, string | number>
  weight?: LiteralUnion<BootstrapTextFontWeight, string | number>
  style?: LiteralUnion<BootstrapTextFontStyle, string>
  lineHeight?: LiteralUnion<BootstrapTextLineHeight, string | number>
  monospace?: boolean
  resetColor?: boolean
  decoration?: LiteralUnion<BootstrapTextDecoration, string>
  truncate?: boolean
}

export function applyTextStyles(
  result: BsJsStyles,
  options: BsJsBreakpointAgnosticOptions,
  breakpoint = ''
) {
  if (!options.text) {
    return
  }

  if (options.text.align) {
    if (!breakpoint) {
      result.classes[`text-${options.text.align}`] = true
    } else {
      result.classes[`text-${breakpoint}-${options.text.align}`] = true
      return
    }
  }

  if (typeof options.text.wrap === 'boolean') {
    result.classes[`text-${options.text.wrap ? 'wrap' : 'nowrap'}`] = true
  } else if (typeof options.text.wrap === 'string') {
    result.classes[`text-${options.text.wrap}`] = true
  }

  if (options.text.break === true) {
    result.classes['text-break'] = true
  }

  if (options.text.transform) {
    result.classes[`text-${options.text.transform}`] = true
  }

  if (typeof options.text.size !== 'undefined') {
    result.classes[`fs-${options.text.size}`] = true
  }

  if (typeof options.text.weight !== 'undefined') {
    result.classes[`fw-${options.text.weight}`] = true
  }

  if (options.text.style) {
    result.classes[`fst-${options.text.style}`] = true
  }

  if (typeof options.text.lineHeight !== 'undefined') {
    result.classes[`lh-${options.text.lineHeight}`] = true
  }

  if (options.text.monospace) {
    result.classes['font-monospace'] = true
  }

  if (options.text.resetColor) {
    result.classes['text-reset'] = true
  }

  if (options.text.decoration) {
    result.classes[`text-decoration-${options.text.decoration}`] = true
  }

  applyTextTruncationStyles(result, options.text.truncate)
}
