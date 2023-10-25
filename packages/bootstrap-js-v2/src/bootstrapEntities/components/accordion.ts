import { BsJsOptions, BsJsStyles } from '../../_types'
import { applyElementNameAsClass } from '../../elements/utils'

export type BsJsAccordionOptions = {
  /** Apply flush styling to accordion */
  flush?: boolean
}

export function applyAccordionStyles<Breakpoint extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoint, 'accordion'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.flush) {
    result.classes['accordion-flush'] = true
  }
}

export type BsJsAccordionButtonOptions = {
  /** Accordion button is currently collapsed */
  collapsed?: boolean
}
export function applyAccordionButtonStyles<Breakpoint extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoint, 'accordion-button'>
) {
  applyElementNameAsClass(result, options.elementType)

  if (options.collapsed) {
    result.classes['collapsed'] = true
  }

  result.elementAttributes['aria-expanded'] = !options.collapsed
}
