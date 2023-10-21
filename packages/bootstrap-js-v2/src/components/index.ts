import { BsJsComponent, BsJsOptions, BsJsStyles } from '../_types'

/** Modifies the provided `result` object with component-specific styles */
export function applyComponentStyles<Component extends BsJsComponent | undefined>(
  prefix: string,
  result: BsJsStyles,
  options: Omit<BsJsOptions<Component>, 'breakpoints'>
) {
  if (!options.componentType) {
    return
  }

  //
}
