import { ElementType, ReactNode, forwardRef } from 'react'
import { BootstrapBreakpoint, BrElement, BrElementProps } from '../../utils/BrElement'
import classNames from 'classnames'
import { useOffcanvas } from './useOffcanvas'
import { useMultiRef } from '../../utils/useMultiRef'

export type OffcanvasProps<T extends ElementType> = BrElementProps<
  T,
  {
    /** Controlled state can be provided by the return value of `useOffcanvas` */
    brOffcanvas: ReturnType<typeof useOffcanvas>
    /** @default "start" */
    brOffcanvasPlacement?: 'start' | 'end' | 'top' | 'bottom'
    brOffcanvasBreakpoint?: BootstrapBreakpoint
  }
>

export type OffcanvasWithRef = <Component extends ElementType = 'div'>(
  props: OffcanvasProps<Component>
) => ReactNode

/**
 * [Offcanvas]()
 */
const Offcanvas: OffcanvasWithRef = forwardRef(function Offcanvas<T extends ElementType = 'div'>(
  props: OffcanvasProps<T>,
  ref?: OffcanvasProps<T>['ref']
) {
  const {
    as = 'div' as ElementType,
    brOffcanvas,
    brOffcanvasPlacement = 'start',
    brOffcanvasBreakpoint,
    className,
    ...rest
  } = props
  const usedRef = useMultiRef(ref, brOffcanvas.ref)

  return (
    <BrElement
      as={as}
      ref={usedRef}
      className={classNames(
        {
          offcanvas: !brOffcanvasBreakpoint,
          [`offcanvas-${brOffcanvasBreakpoint}`]: !!brOffcanvasBreakpoint
        },
        `offcanvas-${brOffcanvasPlacement}`,
        className
      )}
      {...rest}
    />
  )
})
export default Offcanvas
