import { StorybookConfig } from '@storybook/react-vite'
import { resolve } from 'path'
import { mergeConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: [
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
  }
}
export default config
