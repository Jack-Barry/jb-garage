import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Typography
} from '@mui/material'
import Link from 'next/link'
import { Fragment } from 'react'

import { createClient } from '../../prismicio'
import { BlogPostDocument } from '../../types.generated'
import { BLOG_POST_TIMESTAMP_FORMAT, dayjs } from '../../utils/dates'
import { truncateString } from '../../utils/strings'

const Page = ({ items }: { items: BlogPostDocument[] }) => {
  return (
    <Container sx={{ my: 2 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
        <Box sx={{ display: 'grid', gridColumn: '2/6' }}>
          <Fragment>
            {items.map((item) => {
              return (
                <Card key={item.uid} elevation={3} sx={{ my: 1 }}>
                  <CardHeader
                    title={item.data.post_title[0].text}
                    sx={{ pb: 0 }}
                  />
                  <CardContent sx={{ py: 0 }}>
                    <Typography variant="subtitle1" fontStyle="italic">
                      {dayjs(item.first_publication_date).format(
                        BLOG_POST_TIMESTAMP_FORMAT
                      )}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {truncateString(item.data.post_tldr)}
                    </Typography>
                    {item.tags?.map((tag) => (
                      <Chip key={tag} label={tag} sx={{ mr: 1 }} />
                    ))}
                  </CardContent>
                  <CardActions>
                    <Link href={`/blog/${item.uid}`}>Read More</Link>
                  </CardActions>
                </Card>
              )
            })}
          </Fragment>
        </Box>
      </Box>
    </Container>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const items = await client.getAllByType('blog_post', {
    orderings: [{ field: 'document.first_publication_date', direction: 'desc' }]
    /*{ fetch: ['uid']}*/
  })

  return {
    props: {
      items
    }
  }
}
