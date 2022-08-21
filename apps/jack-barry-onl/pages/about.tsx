import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
import { prepareStaticProps } from '../utils/prepare-static-props'

const Page = ({ page, navigation, settings }) => (
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
      description: "About page for Jack Barry's personal blog",
      page
    }
  }
}