import { PrismicRichText } from '@prismicio/react'

const BlogPostSection = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.content} />
  </section>
)

export default BlogPostSection
