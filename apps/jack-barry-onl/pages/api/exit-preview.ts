import { exitPreview, ExitPreviewConfig } from '@prismicio/next'

export default async function exit(
  req: ExitPreviewConfig['req'],
  res: ExitPreviewConfig['res']
) {
  exitPreview({ res, req })
}
