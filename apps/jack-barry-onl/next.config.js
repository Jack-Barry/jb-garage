// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  images: {
    domains: ['images.prismic.io', 'prismic-io.s3.amazonaws.com']
  }
}

module.exports = withNx(nextConfig)
