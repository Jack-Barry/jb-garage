import { BsJsStyles } from '../../libTypes'

type OpacityStylesOptions = {
  cssVariableKey?: string
  classNamePrefix: string
  classNameSuffix?: string
}

export function getOpacityStyles(
  options: OpacityStylesOptions,
  opacity?: number | string
): BsJsStyles {
  const { cssVariableKey, classNamePrefix, classNameSuffix = '' } = options
  const opacityIsNumber = typeof opacity === 'number'
  const opacityIsString = typeof opacity === 'string'
  if (!opacityIsNumber && !opacityIsString) {
    return {}
  }

  const brStyles: BsJsStyles = {}
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
      brStyles.inlineStyles = { [cssVariableKey]: opacityAsNumber }
    } else if (opacityAsNumber === 1) {
      brStyles.classes = { [`${classNamePrefix}-100${classNameSuffix}`]: true }
    } else {
      brStyles.classes = { [`${classNamePrefix}-${opacityAsNumber}${classNameSuffix}`]: true }
    }
  }

  return brStyles
}
