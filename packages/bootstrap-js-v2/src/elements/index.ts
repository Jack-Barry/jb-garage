import { BootstrapElement } from '../_bootstrapTypes'
import {
  BsJsActivatableElement,
  BsJsDisableableElement,
  BsJsOptions,
  BsJsShowableElement,
  BsJsStyles
} from '../_types'

import {
  BsJsButtonGroupOptions,
  BsJsButtonOptions,
  applyButtonGroupStyles,
  applyButtonStyles
} from './components/button'

export type ElementStyleOptions<Element extends BootstrapElement | undefined> = Omit<
  BsJsOptions<Element>,
  'breakpoints'
>

/** Modifies the provided `result` object with element-specific styles */
export function applyElementStyles<Element extends BootstrapElement | undefined>(
  prefix: string,
  result: BsJsStyles,
  options: ElementStyleOptions<Element>
) {
  if (!options.elementType) {
    return
  }

  switch (options.elementType) {
    case 'alert':
      applyElementNameAsClass(result, options.elementType)
      applyShowableStyles(result, options as BsJsOptions<BsJsShowableElement>)
      break
    case 'btn':
      applyElementNameAsClass(result, options.elementType)
      applyButtonStyles(result, options as BsJsButtonOptions)
      applyActiveStyles(result, options as BsJsButtonOptions)
      applyDisabledStyles(result, options as BsJsButtonOptions)
      break
    case 'btn-group':
      applyButtonGroupStyles(result, options as BsJsButtonGroupOptions)
      break
    default:
      applyElementNameAsClass(result, options.elementType)
      break
  }
}

/** Applies the provided element name as a class name in `result` */
function applyElementNameAsClass(result: BsJsStyles, elementName: BootstrapElement) {
  result.classes[elementName] = true
}

/** Applies `show` class if applicable */
function applyShowableStyles(
  result: BsJsStyles,
  options: ElementStyleOptions<BsJsShowableElement>
) {
  if (options.show) {
    result.classes['show'] = true
  }
}

/** Applies `active` class if applicable */
function applyActiveStyles(
  result: BsJsStyles,
  options: ElementStyleOptions<BsJsActivatableElement>
) {
  if (options.active) {
    result.classes['active'] = true
  }
}

/** Applies `disabled` class if applicable */
function applyDisabledStyles(
  result: BsJsStyles,
  options: ElementStyleOptions<BsJsDisableableElement>
) {
  if (options.disabled) {
    result.classes['disabled'] = true
  }
}
