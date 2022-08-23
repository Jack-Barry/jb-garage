import { FacebookOpenGraph } from '@resoc/core'
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function AppHead({ pageProps }: AppProps) {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{pageProps.title}</title>
      <meta name="description" content={pageProps.description} />
      <meta property="og:title" content={pageProps.title} />
      <meta property="og:description" content={pageProps.description} />
      <meta
        property="og:image"
        content={`/social-images/${pageProps.imgSlug}.jpg`}
      />
      <meta property="og:image:width" content={`${FacebookOpenGraph.width}`} />
      <meta
        property="og:image:height"
        content={`${FacebookOpenGraph.height}`}
      />
    </Head>
  )
}
