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
