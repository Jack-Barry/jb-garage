import { LiteralUnion } from '@jb-garage/bootstrap-react/types'
import { BrStyles } from '../brStyles'

export type BrUtilsInteractOptions = {
  select?: LiteralUnion<'all' | 'auto' | 'none', string>
  pointer?: LiteralUnion<'none' | 'auto', string>
}

export function brUtilsInteractStyles(options: BrUtilsInteractOptions = {}): BrStyles {
  const { select, pointer } = options
  const classes: BrStyles['classes'] = {}

  if (select) {
    classes[`user-select-${select}`] = true
  }

  if (pointer) {
    classes[`pe-${pointer}`] = true
  }

  return { classes }
}
