import { isEmptyObject } from '@jb-garage/utils-generic'

import { AllBreakpointsOptions, BootstrapComponentType, BsJsConfig, BsJsStyles } from '../_types'

import { bsJsClearfixStyles } from './bootstrap-helpers/clearfix'
import { bsJsColorAndBackgroundStyles } from './bootstrap-helpers/colorAndBackground'
import { bsJsFocusRingStyles } from './bootstrap-helpers/focusRing'
import { bsJsIconLinkStyles } from './bootstrap-helpers/iconLink'
import { bsJsPositionHelperStyles } from './bootstrap-helpers/position'
import { bsJsRatioStyles } from './bootstrap-helpers/ratio'
import { bsJsStackStyles } from './bootstrap-helpers/stack'
import { bsJsStretchedLinkStyles } from './bootstrap-helpers/stretchedLink'
import { bsJsTextTruncationStyles } from './bootstrap-helpers/textTruncation'
import { bsJsVerticalRuleStyles } from './bootstrap-helpers/verticalRule'
import { bsJsVisuallyHiddenStyles } from './bootstrap-helpers/visuallyHidden'
import { bsJsBackgroundStyles } from './bootstrap-utils/background'
import { bsJsBorderStyles } from './bootstrap-utils/borders'
import { bsJsColorStyles } from './bootstrap-utils/colors'
import { bsJsDisplayStyles } from './bootstrap-utils/display'
import { bsJsFlexStyles } from './bootstrap-utils/flexbox'
import { bsJsFloatStyles } from './bootstrap-utils/float'
import { bsJsInteractStyles } from './bootstrap-utils/interact'
import { bsJsLinkStyles } from './bootstrap-utils/link'
import { bsJsObjectFitStyles } from './bootstrap-utils/objectFit'
import { bsJsOverflowStyles } from './bootstrap-utils/overflow'
import { bsJsPositionStyles } from './bootstrap-utils/position'
import { bsJsShadowStyles } from './bootstrap-utils/shadow'
import { bsJsSizeStyles } from './bootstrap-utils/sizing'
import { bsJsSpacingStyles } from './bootstrap-utils/spacing'
import { bsJsTextStyles } from './bootstrap-utils/text'
import { bsJsVerticalAlignStyles } from './bootstrap-utils/verticalAlign'
import { bsJsVisibilityStyles } from './bootstrap-utils/visibility'
import { bsJsZIndexStyles } from './bootstrap-utils/zIndex'
import { accordionStyles, accordionButtonStyles } from './component-utils/accordion'
import { alertStyles } from './component-utils/alert'
import { breadcrumbItemStyles, breadcrumbsStyles } from './component-utils/breadcrumb'
import { buttonStyles } from './component-utils/button'
import { imageStyles } from './component-utils/image'
import { tableStyles, tableEntryStyles, tableGroupStyles } from './component-utils/table'
import { ALL_BREAKPOINTS_KEY } from './constants'
import { bsJsTheme } from './theme'
import { emptyStyles } from './utils/emptyStyles'
import { mergeStyles } from './utils/mergeStyles'

/**
 * Keeps track of the prefix used for Bootstrap and returns a `bsJs` method that can be used for
 *   generating Bootstrap styles for HTML elements
 */
export class BootstrapJs {
  constructor(private _prefix = 'bs') {}

  /** Translates provided config into Bootstrap classes and inline styles */
  bsJs = <Component extends BootstrapComponentType = 'none'>(
    config: BsJsConfig<Component> = {}
  ): BsJsStyles => {
    let styles = emptyStyles()
    if (isEmptyObject(config)) {
      return styles
    }

    for (const [breakpoint, breakpointOptions] of Object.entries(config)) {
      if (!breakpointOptions || isEmptyObject(breakpointOptions)) {
        continue
      }

      if (breakpoint === ALL_BREAKPOINTS_KEY) {
        const allBreakpointOptions = breakpointOptions as AllBreakpointsOptions<'none'>

        const theme = bsJsTheme(this._prefix, allBreakpointOptions.theme)
        if (theme) {
          styles = mergeStyles(styles, theme)
        }

        // helpers
        const clearfix = bsJsClearfixStyles(allBreakpointOptions.clearfix)
        if (clearfix) {
          styles = mergeStyles(styles, clearfix)
        }

        const colorAndBackground = bsJsColorAndBackgroundStyles(
          allBreakpointOptions.colorAndBackground
        )
        if (colorAndBackground) {
          styles = mergeStyles(styles, colorAndBackground)
        }

        const focusRing = bsJsFocusRingStyles(this._prefix, allBreakpointOptions.focusRing)
        if (focusRing) {
          styles = mergeStyles(styles, focusRing)
        }

        const iconLink = bsJsIconLinkStyles(this._prefix, allBreakpointOptions.iconLink)
        if (iconLink) {
          styles = mergeStyles(styles, iconLink)
        }

        const ratio = bsJsRatioStyles(this._prefix, allBreakpointOptions.ratio)
        if (ratio) {
          styles = mergeStyles(styles, ratio)
        }

        const stack = bsJsStackStyles(allBreakpointOptions.stack)
        if (stack) {
          styles = mergeStyles(styles, stack)
        }

        const stretchLink = bsJsStretchedLinkStyles(allBreakpointOptions.stretchLink)
        if (stretchLink) {
          styles = mergeStyles(styles, stretchLink)
        }

        const textTruncation = bsJsTextTruncationStyles(allBreakpointOptions.truncateText)
        if (textTruncation) {
          styles = mergeStyles(styles, textTruncation)
        }

        const verticalRule = bsJsVerticalRuleStyles(allBreakpointOptions.truncateText)
        if (verticalRule) {
          styles = mergeStyles(styles, verticalRule)
        }

        const visuallyHidden = bsJsVisuallyHiddenStyles(allBreakpointOptions.visuallyHidden)
        if (visuallyHidden) {
          styles = mergeStyles(styles, visuallyHidden)
        }

        // utilities
        const background = bsJsBackgroundStyles(this._prefix, allBreakpointOptions.background)
        if (background) {
          styles = mergeStyles(styles, background)
        }

        const border = bsJsBorderStyles(this._prefix, allBreakpointOptions.border)
        if (border) {
          styles = mergeStyles(styles, border)
        }

        const color = bsJsColorStyles(this._prefix, allBreakpointOptions.color)
        if (color) {
          styles = mergeStyles(styles, color)
        }

        const interactions = bsJsInteractStyles(allBreakpointOptions.interactions)
        if (interactions) {
          styles = mergeStyles(styles, interactions)
        }

        const link = bsJsLinkStyles(allBreakpointOptions.link)
        if (link) {
          styles = mergeStyles(styles, link)
        }

        const overflow = bsJsOverflowStyles(allBreakpointOptions.overflow)
        if (overflow) {
          styles = mergeStyles(styles, overflow)
        }

        const position = bsJsPositionStyles(allBreakpointOptions.position)
        if (position) {
          styles = mergeStyles(styles, position)
        }

        const shadow = bsJsShadowStyles(allBreakpointOptions.shadow)
        if (shadow) {
          styles = mergeStyles(styles, shadow)
        }

        const size = bsJsSizeStyles(allBreakpointOptions.sizing)
        if (size) {
          styles = mergeStyles(styles, size)
        }

        const verticalAlign = bsJsVerticalAlignStyles(allBreakpointOptions.verticalAlign)
        if (verticalAlign) {
          styles = mergeStyles(styles, verticalAlign)
        }

        const visibility = bsJsVisibilityStyles(allBreakpointOptions.visibility)
        if (visibility) {
          styles = mergeStyles(styles, visibility)
        }

        const zIndex = bsJsZIndexStyles(allBreakpointOptions.zIndex)
        if (zIndex) {
          styles = mergeStyles(styles, zIndex)
        }

        // component styles
        const accordionOptions = (allBreakpointOptions as AllBreakpointsOptions<'accordion'>)
          .accordion
        if (accordionOptions) {
          styles = mergeStyles(styles, accordionStyles(accordionOptions))
        }

        const accordionButtonOptions = (
          allBreakpointOptions as AllBreakpointsOptions<'accordion-button'>
        ).accordionButton
        if (accordionButtonOptions) {
          styles = mergeStyles(styles, accordionButtonStyles(accordionButtonOptions))
        }

        const alertOptions = (allBreakpointOptions as AllBreakpointsOptions<'alert'>).alert
        if (alertOptions) {
          styles = mergeStyles(styles, alertStyles(alertOptions))
        }

        const breadcrumbsOptions = (allBreakpointOptions as AllBreakpointsOptions<'breadcrumb'>)
          .breadcrumbs
        if (breadcrumbsOptions) {
          styles = mergeStyles(styles, breadcrumbsStyles(this._prefix, breadcrumbsOptions))
        }

        const breadcrumbItemOptions = (
          allBreakpointOptions as AllBreakpointsOptions<'breadcrumb-item'>
        ).breadcrumbItem
        if (breadcrumbItemOptions) {
          styles = mergeStyles(styles, breadcrumbItemStyles(breadcrumbItemOptions))
        }

        const buttonOptions = (allBreakpointOptions as AllBreakpointsOptions<'button'>).button
        if (buttonOptions) {
          styles = mergeStyles(styles, buttonStyles(buttonOptions))
        }

        const imageOptions = (allBreakpointOptions as AllBreakpointsOptions<'image'>).image
        if (imageOptions) {
          styles = mergeStyles(styles, imageStyles(imageOptions))
        }

        const tableOptions = (allBreakpointOptions as AllBreakpointsOptions<'table'>).table
        if (tableOptions) {
          styles = mergeStyles(styles, tableStyles(tableOptions))
        }

        const tableEntryOptions = (allBreakpointOptions as AllBreakpointsOptions<'table-entry'>)
          .tableEntry
        if (tableEntryOptions) {
          styles = mergeStyles(styles, tableEntryStyles(tableEntryOptions))
        }

        const tableGroupOptions = (allBreakpointOptions as AllBreakpointsOptions<'table-group'>)
          .tableGroup
        if (tableGroupOptions) {
          styles = mergeStyles(styles, tableGroupStyles(tableGroupOptions))
        }
      }

      const positionHelper = bsJsPositionHelperStyles(breakpoint, breakpointOptions.positionHelper)
      if (positionHelper) {
        styles = mergeStyles(styles, positionHelper)
      }

      const display = bsJsDisplayStyles(breakpoint, breakpointOptions.display)
      if (display) {
        styles = mergeStyles(styles, display)
      }

      const flex = bsJsFlexStyles(breakpoint, breakpointOptions.flex)
      if (flex) {
        styles = mergeStyles(styles, flex)
      }

      const float = bsJsFloatStyles(breakpoint, breakpointOptions.float)
      if (float) {
        styles = mergeStyles(styles, float)
      }

      const objectFit = bsJsObjectFitStyles(breakpoint, breakpointOptions.objectFit)
      if (objectFit) {
        styles = mergeStyles(styles, objectFit)
      }

      const spacing = bsJsSpacingStyles(breakpoint, breakpointOptions.spacing)
      if (spacing) {
        styles = mergeStyles(styles, spacing)
      }

      const text = bsJsTextStyles(breakpoint, breakpointOptions.text)
      if (text) {
        styles = mergeStyles(styles, text)
      }
    }

    return styles
  }
}
