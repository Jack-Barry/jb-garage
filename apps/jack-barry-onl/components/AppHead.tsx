import { FacebookOpenGraph } from '@resoc/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'

export default function AppHead({ pageProps }: AppProps) {
  const hostname =
    typeof window !== 'undefined' && window.location.hostname
      ? window.location.hostname
      : ''
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{pageProps.title}</title>
      <meta name="description" content={pageProps.description} />
      <meta property="og:title" content={pageProps.title} />
      <meta property="og:description" content={pageProps.description} />
      <meta
        name="image"
        property="og:image"
        content={`/open-graph/${pageProps.ogImage}`}
      />
      <meta property="og:image:width" content={`${FacebookOpenGraph.width}`} />
      <meta
        property="og:image:height"
        content={`${FacebookOpenGraph.height}`}
      />
      <meta name="author" content="Jack Barry" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@JackBarryOnl" />
      <meta name="twitter:creator" content="@JackBarryOnl" />
      <meta name="twitter:title" content={pageProps.title} />
      <meta name="twitter:description" content={pageProps.description} />
      <meta
        name="twitter:image:src"
        content={`https://${hostname}/open-graph/${pageProps.ogImage}`}
      />
      <meta name="twitter:image:width" content={`${FacebookOpenGraph.width}`} />
      <meta
        name="twitter:image:height"
        content={`${FacebookOpenGraph.height}`}
      />
      {pageProps.publishDate && (
        <Fragment>
          <meta
            name="article-published_time"
            property="article:published_time"
            content={pageProps.publishDate}
          />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={pageProps.publishDate}
          />
        </Fragment>
      )}
      {pageProps.modifiedDate && (
        <meta
          name="article-modified_time"
          property="article:modified_time"
          content={pageProps.modifiedDate}
        />
      )}
    </Head>
  )
}
