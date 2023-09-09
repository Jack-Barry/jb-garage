import type { Meta, StoryFn } from '@storybook/react'

import {
  PlaceholderImgSvgChildren,
  placeholderImgSvgProps
} from '../../../storybook/components/PlaceholderImgSvg'
import { linkToBootstrapDocs } from '../../../storybook/decorators/linkToBootstrapDocs'
import { as } from '../../../storybook/utils'

import Image from './Image'

const meta: Meta<typeof Image> = {
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    as
  }
}

export default meta
export const ResponsiveImages: StoryFn<typeof Image> = () => {
  return (
    <Image
      bsJsImage={{ fluid: true }}
      {...placeholderImgSvgProps({ className: 'bd-placeholder-img-lg' })}
    >
      <PlaceholderImgSvgChildren text="Responsive image" />
    </Image>
  )
}
ResponsiveImages.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/content/images/#responsive-images')
]

export const ImageThumbnails: StoryFn = () => {
  return (
    <Image bsJsImage={{ thumbnail: true }} {...placeholderImgSvgProps({ width: 200, height: 200 })}>
      <PlaceholderImgSvgChildren text="200x200" />
    </Image>
  )
}
ImageThumbnails.decorators = [
  linkToBootstrapDocs('https://getbootstrap.com/docs/5.3/content/images/#image-thumbnails')
]
