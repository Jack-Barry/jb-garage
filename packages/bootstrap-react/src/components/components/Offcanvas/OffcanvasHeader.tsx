import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type OffcanvasHeaderProps<T extends ElementType> = BrElementProps<T>

export type OffcanvasHeaderComponent = <Component extends ElementType = 'div'>(
  props: OffcanvasHeaderProps<Component>
) => ReactNode | null

/**
 * [Offcanvas]()
 */
const OffcanvasHeader: OffcanvasHeaderComponent = forwardRef(function OffcanvasHeader<
  T extends ElementType = 'div'
>(props: OffcanvasHeaderProps<T>, ref?: OffcanvasHeaderProps<T>['ref']) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('offcanvas-header', className)}
      {...rest}
    />
  )
})
export default OffcanvasHeader
