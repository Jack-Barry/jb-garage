import { PrismicRichText } from '@prismicio/react'

const BlogPostSection = ({ slice }) => {
  console.log({ slice })
  return (
    <section>
      <PrismicRichText field={slice.primary.content} />
    </section>
  )
}

export default BlogPostSection
