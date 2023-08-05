import { ElementType, ReactNode, forwardRef } from 'react'
import { BrBreakpoint, BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'
import { useOffcanvas } from './useOffcanvas'
import { useMultiRef } from '../../utils/useMultiRef'

export type OffcanvasProps<T extends ElementType> = BrElementProps<
  T,
  {
    /** Controlled state can be provided by the return value of `useOffcanvas` */
    brOffcanvas: ReturnType<typeof useOffcanvas>
    /** @default "start" */
    brPlacement?: 'start' | 'end' | 'top' | 'bottom'
    brResponsive?: BrBreakpoint
  }
>

export type OffcanvasComponent = <Component extends ElementType = 'div'>(
  props: OffcanvasProps<Component>
) => ReactNode | null

/**
 * [Offcanvas]()
 */
const Offcanvas: OffcanvasComponent = forwardRef(function Offcanvas<T extends ElementType = 'div'>(
  props: OffcanvasProps<T>,
  ref?: OffcanvasProps<T>['ref']
) {
  const { as, brOffcanvas, brPlacement = 'start', brResponsive, className, ...rest } = props
  const usedRef = useMultiRef(ref, brOffcanvas.ref)

  return (
    <BrElement
      as={as as ElementType}
      ref={usedRef}
      className={classNames(
        { offcanvas: !brResponsive, [`offcanvas-${brResponsive}`]: !!brResponsive },
        `offcanvas-${brPlacement}`,
        className
      )}
      {...rest}
    />
  )
})
export default Offcanvas
