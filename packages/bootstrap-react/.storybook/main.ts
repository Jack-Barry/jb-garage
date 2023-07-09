import { StorybookConfig } from '@storybook/react-vite'
import { resolve } from 'path'
import viteTsConfigPathsPlugin from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: [
    '../src/storybook/README.mdx',
    // '../src/**/*.mdx',
    '../src/**/*.stories.tsx'
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
      viteTsConfigPathsPlugin({ projects: [resolve(__dirname, '..', 'tsconfig.json')] })
    )
    return config
  }
}
export default config
