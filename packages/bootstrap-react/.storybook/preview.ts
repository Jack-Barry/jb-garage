import { withThemeByDataAttribute } from '@storybook/addon-styling'
import { Preview } from '@storybook/react'

import '../../../node_modules/bootstrap/scss/bootstrap.scss'
import { getPreferredTheme } from '../../theme-switcher/src/storage'
import '../repos/bootstrap/site/assets/scss/docs.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}
export default preview

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark'
    },
    defaultTheme: getPreferredTheme(),
    attributeName: 'data-bs-theme'
  })
]
