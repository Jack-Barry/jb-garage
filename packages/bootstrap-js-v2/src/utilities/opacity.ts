import { BsJsAsCssVar, BsJsStyles } from '../_types'
import { isCssVar } from '../utils'

export type BsJsOpacityValue = number | string

export type BsJsOpacity = BsJsOpacityValue | BsJsAsCssVar<BsJsOpacityValue>

export type BsJsOpacityStylesOptions<Opacity extends BsJsOpacity = BsJsOpacity> = {
  /** Prefix for the class name this opacity is used for */
  classNamePrefix: string
  /** Suffix for the class name this opacity is used for */
  classNameSuffix?: string
} & (Opacity extends BsJsAsCssVar<string | number>
  ? {
      /** CSS variable key that will be used to set opacity */
      cssVariableKey: string
    }
  : { cssVariableKey?: undefined })

/**
 * Translates options into opacity styles that are used in several Bootstrap utilities, e.g. background,
 *   borders, text color, etc.
 */
export function applyOpacityStyles<T extends BsJsOpacity>(
  result: BsJsStyles,
  /** Options used to generate the `BsJsStyles` attributes */
  options: BsJsOpacityStylesOptions<T>,
  /** Value used for the opacity */
  opacity?: T
) {
  const { cssVariableKey, classNamePrefix, classNameSuffix = '' } = options
  const opacityIsNumber = typeof opacity === 'number'
  const opacityIsString = typeof opacity === 'string'
  const opacityIsCssVar = isCssVar(opacity)

  if (!opacityIsNumber && !opacityIsString && !opacityIsCssVar) {
    return
  }

  if (opacityIsCssVar && !cssVariableKey) {
    console.warn('Must provide cssVariableKey when opacity is set with asCssVar')
    return
  }

  if (opacityIsCssVar && cssVariableKey) {
    result.inlineStyles[cssVariableKey] = opacity.asCssVar
  } else if (!opacityIsCssVar) {
    result.classes[`${classNamePrefix}-${opacity}${classNameSuffix}`] = true
  }
}
