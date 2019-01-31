module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'T.Shinohara',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
    '@/assets/scss/app.scss',
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/shino3.1.0.1.css',
    '@/assets/css/bootstrap_button_sns.css'
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
