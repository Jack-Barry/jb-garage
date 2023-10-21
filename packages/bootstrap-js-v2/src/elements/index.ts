import { BsJsElement, BsJsOptions, BsJsStyles } from '../_types'
import { applyAlertStyles } from '../components/alert'
import { applyButtonGroupStyles, applyButtonStyles } from '../components/button'
import { applyCardImageStyles, applyCardLinkStyles } from '../components/card'
import { applyImageStyles } from '../components/image'
import { applyLinkStyles } from '../utilities/link'

import { applyElementNameAsClass } from './utils'

export type ElementStyleOptions<Element extends BsJsElement | undefined> = Omit<
  BsJsOptions<Element>,
  'breakpoints'
>

/** Modifies the provided `result` object with element-specific styles */
export function applyElementStyles<Element extends BsJsElement | undefined>(
  prefix: string,
  result: BsJsStyles,
  options: ElementStyleOptions<Element>
) {
  if (!options.elementType) {
    return
  }

  switch (options.elementType) {
    case 'alert':
      applyAlertStyles(result, options as BsJsOptions<'alert'>)
      break
    case 'btn':
      applyButtonStyles(result, options as BsJsOptions<'btn'>)
      break
    case 'btn-group':
      applyButtonGroupStyles(result, options as BsJsOptions<'btn-group'>)
      break
    case 'card-img':
      applyCardImageStyles(result, options as BsJsOptions<'card-img'>)
      break
    case 'card-link':
      applyCardLinkStyles(prefix, result, options as BsJsOptions<'card-link'>)
      break
    case 'img':
      applyImageStyles(result, options as BsJsOptions<'img'>)
      break
    case 'link':
      applyLinkStyles(prefix, result, options as BsJsOptions<'link' | 'card-link'>)
      break
    default:
      applyElementNameAsClass(result, options.elementType)
      break
  }
}
