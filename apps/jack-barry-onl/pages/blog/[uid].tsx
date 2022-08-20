import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'

import { createClient, linkResolver } from '../../prismicio'
import { components } from '../../slices'

const Page = ({ page, navigation, settings }) => {
  if (page.data.slices) {
    return <SliceZone slices={page.data.slices} components={components} />
  }

  console.log({ page })
  return <div></div>
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('blog_post', params.uid)

  return {
    props: {
      page
    }
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const documents = await client.getAllByType('blog_post')

  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true
  }
}
