import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography
} from '@mui/material'
import Link from 'next/link'

import { createClient } from '../../prismicio'
import { BlogPostDocument } from '../../types.generated'
import { BLOG_POST_TIMESTAMP_FORMAT, dayjs } from '../../utils/dates'
import { prepareStaticProps } from '../../utils/prepare-static-props'
import { truncateString } from '../../utils/strings'

const Page = ({ items }: { items: BlogPostDocument[] }) => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
      marginX="auto"
      sx={{
        width: { xs: '96vw', sm: '32rem' },
        my: '1rem'
      }}
    >
      {items.map((item) => {
        return (
          <Card key={item.uid} elevation={3} sx={{ width: '100%' }}>
            <CardHeader title={item.data.post_title[0].text} sx={{ pb: 0 }} />
            <CardContent sx={{ py: 0 }}>
              <Typography variant="subtitle1" fontStyle="italic">
                {dayjs(item.first_publication_date).format(
                  BLOG_POST_TIMESTAMP_FORMAT
                )}
              </Typography>
              <Box
                display="flex"
                sx={{ gap: '0.5rem', flexWrap: 'wrap', mb: '0.5rem' }}
              >
                {item.tags?.map((tag) => (
                  <Chip key={tag} label={tag} />
                ))}
              </Box>
              <Typography variant="body1" gutterBottom>
                {truncateString(item.data.post_tldr)}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
              <Link passHref={true} href={`/blog/${item.uid}`}>
                <Button>Read More</Button>
              </Link>
            </CardActions>
          </Card>
        )
      })}
    </Stack>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const items = await client.getAllByType('blog_post', {
    orderings: [{ field: 'document.first_publication_date', direction: 'desc' }]
    /*{ fetch: ['uid']}*/
  })
  const resoc = await prepareStaticProps("Jack Barry's Personal Blog", 'blog')

  return {
    props: {
      ...resoc.props,
      description:
        'Thoughts from Jack Barry on development, philosophy, and life in general',
      items
    }
  }
}
