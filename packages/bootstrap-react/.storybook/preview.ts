import { Preview } from '@storybook/react'
import '../../../dist/packages/bootstrap/styles/index.min.css'
import theme from './theme'

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
