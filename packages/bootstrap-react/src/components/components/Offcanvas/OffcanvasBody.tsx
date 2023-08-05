import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'

export type OffcanvasBodyProps<T extends ElementType> = BrElementProps<T>

export type OffcanvasBodyComponent = <Component extends ElementType = 'div'>(
  props: OffcanvasBodyProps<Component>
) => ReactNode | null

/**
 * [Offcanvas]()
 */
const OffcanvasBody: OffcanvasBodyComponent = forwardRef(function OffcanvasBody<
  T extends ElementType = 'div'
>(props: OffcanvasBodyProps<T>, ref?: OffcanvasBodyProps<T>['ref']) {
  const { as, className, ...rest } = props

  return (
    <BrElement
      as={as as ElementType}
      ref={ref}
      className={classNames('offcanvas-body', className)}
      {...rest}
    />
  )
})
export default OffcanvasBody
