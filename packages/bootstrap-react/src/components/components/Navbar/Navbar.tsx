import classNames from 'classnames'
import { ElementType, ReactNode, forwardRef } from 'react'
import { BrElement, BrElementProps } from '../../utils/BrElement'

export type NavbarProps<T extends ElementType> = BrElementProps<T> & {
  /** Where and how to place the navbar */
  brPlacement?: 'fixed-top' | 'fixed-bottom' | 'sticky-top' | 'sticky-bottom'
}

export type NavbarComponent = <Component extends ElementType = 'nav'>(
  props: NavbarProps<Component>
) => ReactNode | null

/**
 * [Navbar]()
 */
const Navbar: NavbarComponent = forwardRef(function Navbar<T extends ElementType = 'nav'>(
  props: NavbarProps<T>,
  ref?: NavbarProps<T>['ref']
) {
  const { as = 'nav' as ElementType, brPlacement, className, ...rest } = props

  return (
    <BrElement
      as={as}
      ref={ref}
      className={classNames('navbar', brPlacement && brPlacement, className)}
      {...rest}
    />
  )
})
export default Navbar
