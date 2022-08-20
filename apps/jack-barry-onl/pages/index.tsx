import { Box } from '@mui/system'
import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

const Page = ({ page, navigation, settings }) => (
  <Box sx={{ textAlign: 'center' }}>
    <SliceZone slices={page.data.slices} components={components} />
  </Box>
)

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('home_page')

  return {
    props: {
      page
    }
  }
}
