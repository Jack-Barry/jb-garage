import React from 'react'
// import { PrismicRichText } from '@prismicio/react'

const CodeBlock = ({ slice, context, index }) => {
  console.log({ slice, context, index })
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: context.find((ctxItem) => ctxItem.index === index).codeBlock
      }}
    />
  )
}

export default CodeBlock
