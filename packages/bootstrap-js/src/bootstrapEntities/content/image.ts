import { BsJsOptions, BsJsStyles } from '../../_types'

export type BsJsImageOptions = {
  /**  */
  fluid?: boolean
  /**  */
  thumbnail?: boolean
}

export function applyImageStyles<Breakpoints extends string>(
  result: BsJsStyles,
  options: BsJsOptions<Breakpoints, 'img'>
) {
  if (options.fluid) {
    result.classes['img-fluid'] = true
  }

  if (options.thumbnail) {
    result.classes['img-thumbnail'] = true
  }
}