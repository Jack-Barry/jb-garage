import { storeImageData } from '@resoc/img-data'

export const prepareStaticProps = async (title: string, imgSlug: string) => {
  await storeImageData('apps/jack-barry-onl/resoc-image-data.json', imgSlug, {
    template: 'default',
    values: { title }
  })

  return {
    props: {
      title,
      imgSlug
    }
  }
}
