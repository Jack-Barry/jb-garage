import { Box, Card, CardContent, Container } from '@mui/material'
import { PrismicRichText } from '@prismicio/react'
import React from 'react'

const RichTextCard = ({ slice }) => (
  <Container sx={{ my: 2 }}>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
      <Box sx={{ display: 'grid', gridColumn: '2/6' }}>
        <Card elevation={5}>
          <CardContent sx={{ textAlign: 'center' }}>
            <PrismicRichText field={slice.primary.message} />
          </CardContent>
        </Card>
      </Box>
    </Box>
  </Container>
)

export default RichTextCard
