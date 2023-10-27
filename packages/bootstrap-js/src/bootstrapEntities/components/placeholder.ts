import { LiteralUnion } from '@jb-garage/utils-generic'

import { BsJsOptions, BsJsStyles } from '../../_types'

export type BsJsPlaceholderAnimationOptions = {
  /** Type of animation to use */
  animation: LiteralUnion<'glow' | 'wave', string>
}
export function applyPlaceholderAnimationStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'placeholder-animation'>
) {
  result.classes[`placeholder-${options.animation}`] = true
}
