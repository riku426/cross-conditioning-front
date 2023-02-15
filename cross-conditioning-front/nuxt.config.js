export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cross Condition',
    htmlAttrs: { lang: 'ja' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ストレッチ×コンディショニングで圧倒的な変化を一緒に創造しませんか？Cross Conditionに週に１回通うだけで、体に変化が生まれます。激しい運動が苦手、日々のデスクワークで腰が痛い、といった悩みを持つ方におすすめです。' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'hoonHRUJ6meM3EZ70jSNvaSunUDW0_UR2zeCQYTQDe8'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@1,100;1,600&display=swap' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Vollkorn" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    { src: '@/plugins/vue-awesome-swiper.js', ssr: false },
    { src: '~/plugins/vue2-google-maps.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    '~/components/home'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // fontawesome
    '@nuxtjs/fontawesome',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    vendor: [
      'vue-awesome-swiper',
    ],
    extend(config, ctx) { },
    vendor: ['vue2-google-maps'],
    transpile: [/^vue2-google-maps($|\/)/],
  },

  // アイコン
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },
}
