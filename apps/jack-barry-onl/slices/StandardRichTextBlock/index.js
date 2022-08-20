import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const StandardRichTextBlock = ({ slice }) => (
  <div className="div__rich-text">
    <PrismicRichText field={slice.primary.text} />
  </div>
)

export default StandardRichTextBlock
