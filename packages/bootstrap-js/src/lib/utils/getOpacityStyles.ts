import { BsJsStyles } from '../../_types'
import { emptyStyles } from '../utils/emptyStyles'

type OpacityStylesOptions = {
  /** CSS variable key that will be used to set opacity */
  cssVariableKey?: string
  /** Prefix for the class name this opacity is used for */
  classNamePrefix: string
  /** Suffix for the class name this opacity is used for */
  classNameSuffix?: string
}

/**
 * Translates options into opacity styles that are used in several Bootstrap utilities, e.g. background,
 *   borders, text color, etc.
 */
export function getOpacityStyles(
  /** Options used to generate the `BsJsStyles` attributes */
  options: OpacityStylesOptions,
  /** Value used for the opacity */
  opacity?: number | string
): BsJsStyles {
  const { cssVariableKey, classNamePrefix, classNameSuffix = '' } = options
  const opacityIsNumber = typeof opacity === 'number'
  const opacityIsString = typeof opacity === 'string'
  if (!opacityIsNumber && !opacityIsString) {
    return emptyStyles()
  }

  const brStyles: BsJsStyles = emptyStyles()
  let opacityAsNumber: number | undefined

  if (opacityIsNumber) {
    opacityAsNumber = opacity
  } else {
    const opacityIsPercentage = opacity.endsWith('%')
    opacityAsNumber = opacityIsPercentage
      ? parseFloat(opacity.replace('%', '')) / 100
      : parseFloat(opacity)
  }

  if (opacityAsNumber !== undefined) {
    if (opacityAsNumber < 1 && !!cssVariableKey) {
      brStyles.inlineStyles[cssVariableKey] = opacityAsNumber
    } else if (opacityAsNumber === 1) {
      brStyles.classes[`${classNamePrefix}-100${classNameSuffix}`] = true
    } else {
      brStyles.classes[`${classNamePrefix}-${opacityAsNumber}${classNameSuffix}`] = true
    }
  }

  return brStyles
}
