import { create } from '@storybook/theming/create'

import { ColorLightModeTextBase } from '../../../dist/packages/style-dictionary/js/colors/light_mode'
import { ColorBaseBlue500 } from '../../../dist/packages/style-dictionary/js/colors/base'
import {
  FontFamilyBase,
  FontFamilyFallback
} from '../../../dist/packages/style-dictionary/js/fonts/families'

export default create({
  base: 'light',
  brandTitle: 'Bootstrap React by Jack Barry',
  brandTarget: '_self',
  fontBase: `${FontFamilyBase}, ${FontFamilyFallback}`,

  // Colors
  colorPrimary: 'rebeccapurple',
  colorSecondary: ColorBaseBlue500,

  // UI
  // appBg: '#ffffff',
  // appContentBg: '#ffffff',
  // appBorderColor: '#585C6D',
  // appBorderRadius: 4,

  // Text colors
  textColor: ColorLightModeTextBase
  // textInverseColor: '#ffffff',

  // Toolbar default and active colors
  // barTextColor: '#9E9E9E',
  // barSelectedColor: '#585C6D',
  // barBg: '#ffffff',

  // Form colors
  // inputBg: '#ffffff',
  // inputBorder: '#10162F',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 2,
})
