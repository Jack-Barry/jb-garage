import { Preview } from '@storybook/react'
import theme from './theme'

import '../../../dist/packages/bootstrap/styles/index.min.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      theme
    }
  }
}

export default preview
