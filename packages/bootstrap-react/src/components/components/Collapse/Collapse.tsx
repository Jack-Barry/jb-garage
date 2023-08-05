import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import { useCollapse } from './useCollapse'
import classNames from 'classnames'
import { useMultiRef } from '../../utils/useMultiRef'

export type CollapseProps<T extends ElementType> = BrElementProps<
  T,
  {
    brCollapse: ReturnType<typeof useCollapse>
  }
>

export type CollapseWithRef = <Component extends ElementType = 'div'>(
  props: CollapseProps<Component>
) => ReactNode

/**
 * [Collapse](https://getbootstrap.com/docs/5.3/components/collapse)
 */
const Collapse: CollapseWithRef = forwardRef(function Collapse<T extends ElementType = 'div'>(
  props: CollapseProps<T>,
  ref?: CollapseProps<T>['ref']
) {
  const { as = 'div' as ElementType, brCollapse, className, ...rest } = props
  const { collapseRef } = brCollapse
  const usedRef = useMultiRef(ref, collapseRef)

  return <BrElement as={as} ref={usedRef} className={classNames('collapse', className)} {...rest} />
})
export default Collapse
