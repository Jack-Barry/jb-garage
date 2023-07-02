import { DEFAULT_THEME_KEY, getPreferredTheme } from './storage'

/**
 * Provides a function that can be invoked on page load to set the user's preferred
 *   theme on `document.body.dataset[themeKey]`
 *
 * This function should be invoked inside of the `body` as a blocking script to
 *   prevent flickering, e.g.:
 *
 * ```html
 * <body>
 *   <script type="module">
 *     import { setThemeOnLoad } from './setThemeOnLoad.js'
 *     setThemeOnLoad()
 *   </script>
 *   <!-- other stuff goes here -->
 * </body>
 * ```
 */
export function setThemeOnLoad(themeKey = DEFAULT_THEME_KEY) {
  const theme = getPreferredTheme(themeKey)
  document.body.dataset[themeKey] = theme
}
