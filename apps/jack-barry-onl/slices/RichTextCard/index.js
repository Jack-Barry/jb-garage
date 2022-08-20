import { Box, Card, CardContent, Typography } from '@mui/material'
import { PrismicRichText } from '@prismicio/react'
import React from 'react'

const RichTextCard = ({ slice }) => (
  <Box
    sx={{
      width: { xs: '96vw', sm: '42rem' },
      maxWidth: '96vw',
      mx: 'auto',
      my: '1rem'
    }}
  >
    <Card elevation={5}>
      <CardContent>
        <PrismicRichText
          field={slice.primary.message}
          components={{
            heading1: (props) => (
              <Typography
                variant="h1"
                sx={{ marginBottom: '1.25rem', textAlign: 'center' }}
                {...props}
              />
            )
          }}
        />
      </CardContent>
    </Card>
  </Box>
)

export default RichTextCard
