import { ElementType } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useCollapse } from './useCollapse'
import classNames from 'classnames'

export type CollapseProps<T extends ElementType> = BrElementProps<
  T,
  {
    collapse: ReturnType<typeof useCollapse>
  }
>

/**
 * [Collapse](https://getbootstrap.com/docs/5.3/components/collapse)
 */
export default function Collapse<T extends ElementType>(props: CollapseProps<T>) {
  const { as, collapse, className, ...rest } = props
  const { hasBeenShown, collapseRef } = collapse

  return (
    <BrElement
      as={as as ElementType}
      ref={collapseRef}
      className={classNames({ collapse: !hasBeenShown }, className)}
      {...rest}
    />
  )
}
