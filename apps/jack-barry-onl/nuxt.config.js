export default {
  target: 'static',
  buildModules: [
    [
      '@nuxtjs/fontawesome',
      {
        icons: { solid: ['faHelmetSafety', 'faMoon', 'faSun'] }
      }
    ],
    [
      '@nuxtjs/vuetify',
      {
        defaultAssets: { icons: 'fa' }
      }
    ],
    '@nuxt/typescript-build'
  ],

  /*
   ** Headers of the page
   */
  head: {
    title: 'A Dad Who Devs',
    titleTemplate: 'Jack Barry | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
