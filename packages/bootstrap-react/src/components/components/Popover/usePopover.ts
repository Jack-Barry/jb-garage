import {
  UseFloatingElementOptions,
  useFloatingElement
} from '@jb-garage/bootstrap-react/hooks/useFloatingElement'

type UsePopoverOptions = UseFloatingElementOptions & {
  /**
   * Types of interactions that will toggle the visibility of the popover element
   *
   * @default { hover: false; focus: false; click: true }
   */
  trigger?: { hover?: boolean; focus?: boolean; click?: boolean }
  /**
   * The popover element is dismissed when clicking outside of the floating element
   *
   * This only applies when `trigger.click` is `true`
   *
   * @default false
   */
  dismissible?: boolean
}

const POPOVER_TRIGGER_DEFAULTS = { hover: false, focus: false, click: true }

/**
 * Provides popover-related functionality which closely aligns with Bootstrap's
 *   vanilla JS implementation of the `Popover` class.
 *
 * Key differences with the Bootstrap vanilla JS implementation:
 * - `allowList`, `container`, `customClass`, `html`, `sanitize`, `sanitizeFn`,
 *   `selector` `title`, and `template` options are not implemented, since they
 *   are mostly superceded by simply providing the target and content of the tooltip
 *   as React components
 * - `popperConfig` is not used, because the underlying lib supporting floating
 *   elements in this project is [Floating UI](https://floating-ui.com/). However,
 *   you may augment the default config used for `useFloating` with the `customFloatingConfig`
 *   option
 */
export function usePopover<Arrow extends HTMLElement>(options: UsePopoverOptions = {}) {
  const { trigger = POPOVER_TRIGGER_DEFAULTS, dismissible = false, ...rest } = options
  return useFloatingElement<Arrow>({ trigger, dismissible, ...rest })
}
