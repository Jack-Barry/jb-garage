import { resolve } from 'path'

import { StorybookConfig } from '@storybook/react-vite'
import viteTsConfigPathsPlugin from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: [
    '../src/storybook/README.mdx',
    {
      titlePrefix: 'Layout',
      directory: '../src/components/layout'
    },
    {
      titlePrefix: 'Content',
      directory: '../src/components/content'
    },
    {
      titlePrefix: 'Forms',
      directory: '../src/components/forms'
    },
    {
      titlePrefix: 'Components',
      directory: '../src/components/components'
    },
    {
      titlePrefix: 'Utilities',
      directory: '../src/components/utils'
    }
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config) {
    config.plugins?.push(
      viteTsConfigPathsPlugin({
        root: '../..'
        // projects: [resolve(__dirname, '..', 'tsconfig.json')]
      })
    )
    return config
  }
}
export default config
