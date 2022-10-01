import { FacebookOpenGraph } from '@resoc/core'
import { compileLocalTemplate } from '@resoc/create-img'
import { basename } from 'path'

export const prepareStaticProps = async (title: string, imgSlug: string) => {
  const ogImage = await compileLocalTemplate(
    'apps/jack-barry-onl/resoc-template/resoc.manifest.json',
    {
      title
    },
    FacebookOpenGraph,
    `apps/jack-barry-onl/public/open-graph/${imgSlug}-{{ hash }}.jpg`,
    { cache: true }
  )

  return {
    props: {
      title,
      ogImage: basename(ogImage)
    }
  }
}
