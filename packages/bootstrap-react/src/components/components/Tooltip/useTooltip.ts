import {
  FLOATING_TRIGGER_DEFAULTS,
  UseFloatingElementOptions,
  useFloatingElement
} from '@jb-garage/bootstrap-react/hooks/useFloatingElement'

const TOOLTIP_TRIGGER_DEFAULTS = FLOATING_TRIGGER_DEFAULTS

/**
 * Provides tooltip-related functionality which closely aligns with Bootstrap's
 *   vanilla JS implementation of the `Tooltip` class.
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
export function useTooltip<Arrow extends HTMLElement>(options: UseFloatingElementOptions = {}) {
  return useFloatingElement<Arrow>({ trigger: TOOLTIP_TRIGGER_DEFAULTS, ...options })
}
