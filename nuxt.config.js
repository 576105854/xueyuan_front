
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/element-ui'},
    {src: '@/plugins/swiper-plugin.js', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  axios: {
    proxy: true, // 需要的，不设置请求无法转发
    prefix: '/api', // baseURL
    changOrigin: true,
    credentials: true,
  },
  proxy: {
    '/api/educms': {
      target: 'http://127.0.0.1:8004',
      changOrigin: true,
      pathRewrite: {
        '^/api/educms': 'educms'
      },
    },
    '/api/eduservice': {
      target: 'http://127.0.0.1:8001',
      changOrigin: true,
      pathRewrite: {
        '^/api/eduservice': 'eduservice'
      },
    },
    '/api/edumsm': {
      target: 'http://127.0.0.1:8005',
      changOrigin: true,
      pathRewrite: {
        '^/api/edumsm': 'edumsm'
      },
    },
    '/api/educenter': {
      target: 'http://127.0.0.1:8006',
      changOrigin: true,
      pathRewrite: {
        '^/api/educenter': 'educenter'
      },
    },
    '/api/eduvod': {
      target: 'http://127.0.0.1:8003',
      changOrigin: true,
      pathRewrite: {
        '^/api/eduvod': 'eduvod'
      },
    }
  },
}
