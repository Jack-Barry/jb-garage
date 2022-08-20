import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page, navigation, settings }) => (
  <SliceZone slices={page.data.body} components={components} />
)

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('about_page')

  console.log({ page })

  return {
    props: {
      page
    }
  }
}
