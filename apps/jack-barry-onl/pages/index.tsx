import { Box } from '@mui/system'
import { SliceZone } from '@prismicio/react'

import { createClient } from '../config/prismic'
import { components } from '../slices'
import { prepareStaticProps } from '../utils/prepare-static-props'

const Page = ({ page }) => (
  <Box sx={{ textAlign: 'center' }}>
    <SliceZone slices={page.data.slices} components={components} />
  </Box>
)

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('home_page')
  const resoc = await prepareStaticProps('Jack Barry', 'home')

  return {
    props: {
      ...resoc.props,
      description:
        'Jack Barry is a software engineer from El Paso, TX. He enjoys hanging out with his family, playing/recording music, tinkering on software and home server projects, and riding his bicycle',
      page
    }
  }
}
