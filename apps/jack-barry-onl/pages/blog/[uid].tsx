import { Alert, AlertTitle, Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { RTPreformattedNode } from '@prismicio/types'

import { createClient, linkResolver } from '../../config/prismic'
import { components } from '../../slices'
import { BlogPostDocument } from '../../types.generated'
import { BLOG_POST_TIMESTAMP_FORMAT, dayjs } from '../../utils/dates'
import codeSnippetToHtml from '../../utils/code-snippet-to-html'
import { prepareStaticProps } from '../../utils/prepare-static-props'

interface CodeBlock {
  index: number
  codeBlock: string
}

const Page = ({
  page,
  codeBlocks
}: {
  page: BlogPostDocument
  codeBlocks: CodeBlock[]
}) => {
  const publishDate = dayjs(page.first_publication_date).format(
    BLOG_POST_TIMESTAMP_FORMAT
  )
  return (
    <Box
      sx={{
        maxWidth: '48rem',
        my: 4,
        mx: 'auto'
      }}
    >
      <article>
        <Card>
          <CardContent>
            <Typography variant="h1" textAlign="center">
              {page.data.post_title[0].text}
            </Typography>
            <Typography variant="body2" textAlign="center" marginBottom={2}>
              {publishDate}
            </Typography>
            <Alert severity="info" sx={{ marginBottom: 2 }}>
              <AlertTitle sx={{ fontWeight: 'bold' }}>TL;DR</AlertTitle>
              {page.data.post_tldr}
            </Alert>
            <SliceZone
              slices={page.data.body}
              components={components}
              context={codeBlocks}
            />
          </CardContent>
        </Card>
      </article>
    </Box>
  )
}

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('blog_post', params.uid)

  const codeBlocks = []
  for (const [index, section] of page.data.body.entries()) {
    if (section.slice_type === 'code_block') {
      codeBlocks.push({
        index,
        codeBlock: await codeSnippetToHtml(
          (section.primary.code[0] as RTPreformattedNode).text,
          section.primary.language
        )
      })
    }
  }

  const resoc = await prepareStaticProps(page.data.post_title[0].text, page.uid)

  return {
    props: {
      ...resoc.props,
      description: page.data.post_tldr,
      publishDate: page.first_publication_date,
      modifiedDate: page.last_publication_date,
      page,
      codeBlocks
    }
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const documents = await client.getAllByType('blog_post')

  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: false
  }
}
