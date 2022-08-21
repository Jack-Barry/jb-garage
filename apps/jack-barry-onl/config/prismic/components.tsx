import { Box, Typography } from '@mui/material'
import { JSXMapSerializer, LinkProps } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'
import { ElementType } from 'react'

export const internalLinkComponent: ElementType<LinkProps> = ({
  href,
  ...pageProps
}) => (
  <Link href={href}>
    <a {...pageProps} />
  </Link>
)

export const richTextComponents: JSXMapSerializer = {
  heading1: (props) => <Typography variant="h1" {...props} />,
  heading2: (props) => <Typography variant="h2" {...props} />,
  heading3: (props) => <Typography variant="h3" {...props} />,
  heading4: (props) => <Typography variant="h4" {...props} />,
  heading5: (props) => <Typography variant="h5" {...props} />,
  heading6: (props) => <Typography variant="h6" {...props} />,
  paragraph: (props) => <Typography variant="body1" {...props} />,
  image: (props) => (
    <Box marginBottom="1.5rem">
      <Image
        src={props.node.url}
        alt={props.node.alt}
        width={props.node.dimensions.width}
        height={props.node.dimensions.height}
        layout="responsive"
      />
    </Box>
  ),
  hyperlink: (props) => <Link href={props.node.data.url}>{props.text}</Link>
}
