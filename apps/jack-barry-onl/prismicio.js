import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'

/**
 * @typedef {import('@prismicio/helpers').LinkResolverFunction} LinkResolverFunction
 */

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {LinkResolverFunction}
 */
// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'home_page':
      return '/'
    case 'about_page':
      return `/about`
    case 'blog_post':
      return `/blog/${doc.uid}`
    default:
      return null
  }
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const accessToken = process.env.PRISMIC_ACCESS_TOKEN
  const client = prismic.createClient(sm.apiEndpoint, {
    ...config,
    accessToken
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  })

  return client
}
