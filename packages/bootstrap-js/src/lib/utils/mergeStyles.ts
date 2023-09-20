import { BsJsStyles } from '../../_types'

export function mergeStyles(configA: BsJsStyles, configB: BsJsStyles): BsJsStyles {
  return {
    classes: {
      ...configA.classes,
      ...configB.classes
    },
    inlineStyles: {
      ...configA.inlineStyles,
      ...configB.inlineStyles
    },
    dataAttributes: {
      ...configA.dataAttributes,
      ...configB.dataAttributes
    }
  }
}
