import {
  BsJsActivatableElementOptions,
  BsJsDisableableElementOptions,
  BsJsElement,
  BsJsFadeableElementOptions,
  BsJsShowableElementOptions,
  BsJsStyles
} from '../_types'

/** Applies the provided element name as a class name in `result` */
export function applyElementNameAsClass(result: BsJsStyles, elementName: BsJsElement) {
  result.classes[elementName] = true
}

/** Applies `show` class if applicable */
export function applyShowableStyles(result: BsJsStyles, options: BsJsShowableElementOptions) {
  if (options.show) {
    result.classes['show'] = true
  }
}

/** Applies `active` class if applicable */
export function applyActiveStyles(result: BsJsStyles, options: BsJsActivatableElementOptions) {
  if (options.active) {
    result.classes['active'] = true
  }
}

/** Applies `disabled` class if applicable */
export function applyDisabledStyles(result: BsJsStyles, options: BsJsDisableableElementOptions) {
  if (options.disabled) {
    result.classes['disabled'] = true
  }
}
