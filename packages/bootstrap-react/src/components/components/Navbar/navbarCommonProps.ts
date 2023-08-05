export type NavbarCommonProps = {
  /** Apply navbar scroll styles */
  brNavbarScroll?: boolean
}

export function classNamesFromNavbarCommonProps(props: NavbarCommonProps) {
  const { brNavbarScroll } = props

  return {
    'navbar-nav-scroll': brNavbarScroll
  }
}
