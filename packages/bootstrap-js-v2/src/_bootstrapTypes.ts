export type BootstrapElement =
  | 'accordion'
  | 'accordion-body'
  | 'accordion-button'
  | 'accordion-collapse'
  | 'accordion-header'
  | 'accordion-item'
  | 'alert'
  | 'alert-heading'
  | 'alert-link'
  | 'badge'
  | 'breadcrumb'
  | 'breadcrumb-item'
  | 'btn'
  | 'btn-group'
  | 'btn-toolbar'
  | 'card'
  | 'card-body'
  | 'card-footer'
  | 'card-group'
  | 'card-header'
  | 'card-img'
  | 'card-img-overlay'
  | 'card-link'
  | 'card-subtitle'
  | 'card-text'
  | 'card-title'
  | 'carousel'
  | 'carousel-caption'
  | 'carousel-control'
  | 'carousel-control-icon'
  | 'carousel-indicator'
  | 'carousel-indicators'
  | 'carousel-inner'
  | 'carousel-item'

/** Theme included in Bootstrap by default */
export type BootstrapTheme = 'light' | 'dark'

/** Breakpoint included in Bootstrap by default */
export type BootstrapDefaultBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

/** Theme color name included in Bootstrap by default */
export type BootstrapThemeColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

/** Theme subtle color name included in Bootstrap by default */
export type BootstrapThemeColorSubtle =
  | 'primary-subtle'
  | 'secondary-subtle'
  | 'success-subtle'
  | 'danger-subtle'
  | 'warning-subtle'
  | 'info-subtle'
  | 'light-subtle'
  | 'dark-subtle'

/** Button colors included in Bootstrap by default */
export type BootstrapButtonColor = BootstrapThemeColor | 'link'

/** Button sizes included in Bootstrap by default */
export type BootstrapButtonSize = 'sm' | 'lg'
