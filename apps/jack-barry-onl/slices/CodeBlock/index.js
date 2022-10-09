import React, { useState } from 'react'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Chip, Fade, IconButton, Typography } from '@mui/material'

const CodeBlock = ({ slice, context, index }) => {
  const [copied, setCopied] = useState(false)

  const handleCopyClick = async () => {
    navigator.clipboard.writeText(slice.primary.code[0].text)
    setCopied(true)
    await new Promise((res) => setTimeout(res, 2000))
    setCopied(false)
  }
  return (
    <Box style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          right: 0,
          margin: '0.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}
      >
        <Fade in={copied}>
          <Chip label="Copied!" />
        </Fade>
        <IconButton onClick={handleCopyClick}>
          <Typography component="div" sx={{ flexGrow: 1 }} />
          <FontAwesomeIcon size="xs" icon={faCopy} />
        </IconButton>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: context.find((ctxItem) => ctxItem.index === index).codeBlock
        }}
      />
    </Box>
  )
}

export default CodeBlock
