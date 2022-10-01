import { SliceZone } from '@prismicio/react'

import { createClient } from '../config/prismic'
import { components } from '../slices'
import { prepareStaticProps } from '../utils/prepare-static-props'

const Page = ({ page }) => (
  <SliceZone slices={page.data.body} components={components} />
)

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('about_page')
  const resoc = await prepareStaticProps('About Jack Barry', 'about')

  return {
    props: {
      ...resoc.props,
      description:
        "About page for Jack Barry's personal blog. Jack is a software engineer from El Paso, TX who enjoys hanging out with his family, playing/recording music, tinkering on software and home server projects, and riding his bicycle",
      page
    }
  }
}
