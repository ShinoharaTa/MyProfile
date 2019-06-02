// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//   router: {
//     base: '/MyProfile/'
//   }
// } : {}

// export default {
//   ...routerBase
// }

module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',
  head: {
    title: 'Shinohara.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Shinoのプロフィールページ。自己紹介、職務経歴、趣味等。また、過去の制作物などのご紹介' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Shinohara.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://shino3.net/' },
      { hid: 'og:title', property: 'og:title', content: 'Shinohara.' },
      { hid: 'og:description', property: 'og:description', content: 'Shinoのプロフィールページ。自己紹介、職務経歴、趣味等。また、過去の制作物などのご紹介' },
      { hid: 'og:image', property: 'og:image', content: 'https://shino3.net/favicon.ico' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lora'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'
      }
    ]
  },
  css: [
    '~/assets/scss/app.scss',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/shino3.1.0.1.css',
    '~/assets/css/bootstrap_button_sns.css'
  ],
  router: {
    middleware: 'pages'
  },
  modules: [
    ['bootstrap-vue/nuxt', { css: false }]
  ],  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {}
}
