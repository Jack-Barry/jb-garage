import {
  setPreviewData,
  redirectToPreviewURL,
  SetPreviewDataConfig,
  CreateClientConfig,
  RedirectToPreviewURLConfig
} from '@prismicio/next'
import { linkResolver, createClient } from '../../config/prismic'

export default async function preview(
  req: CreateClientConfig['req'],
  res: SetPreviewDataConfig['res'] & RedirectToPreviewURLConfig['res']
) {
  const client = createClient({ req })

  setPreviewData({ req, res })

  await redirectToPreviewURL({ req, res, client, linkResolver })
}
