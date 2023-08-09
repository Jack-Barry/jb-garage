import { CSSProperties } from 'react'
import { BrStyles } from '../brStyles'

type OpacityStylesOptions = {
  cssVariableKey: string
  classNamePrefix: string
}

export function getOpacityStyles(
  options: OpacityStylesOptions,
  opacity?: number | string
): BrStyles {
  const { cssVariableKey, classNamePrefix } = options
  const opacityIsNumber = typeof opacity === 'number'
  const opacityIsString = typeof opacity === 'string'
  if (!opacityIsNumber && !opacityIsString) {
    return {}
  }

  const brStyles: BrStyles = {}
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
    if (opacityAsNumber < 1) {
      brStyles.inlineStyles = { [cssVariableKey]: opacityAsNumber } as CSSProperties
    } else if (opacityAsNumber === 1) {
      brStyles.classes = { [`${classNamePrefix}-100`]: true }
    } else {
      brStyles.classes = { [`${classNamePrefix}-${opacityAsNumber}`]: true }
    }
  }

  return brStyles
}
