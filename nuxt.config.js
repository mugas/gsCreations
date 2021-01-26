import blogs from './content/blogs.json'
// import codings from './content/codings.json'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    script: [
      {
        type: 'text/javascript',
        src:
          'https://platform-api.sharethis.com/js/sharethis.js#property=5ff064f32bc64600181b0f01&product=sop',
        async: 'async',
      },
    ],

    title: '<Blog Name>',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://example.com`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '<Blog Name>',
      },
      {
        hid: 'description',
        name: 'description',
        content: '<Blog name> and description',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '<Blog name> and description',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: '<Blog Name>',
      },
      {
        hid: 'og:article:author',
        property: 'og:article:author',
        content: 'https://github.com/code-tribe',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '<Blog Name>',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: '<Blog Name>',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: '<Blog name> and description',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /**
   * Plugins
   */
  plugins: ['~/plugins/lazyload'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/google-tag-manager', { id: 'GTM-PV76V8S' }],
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-fontawesome',
    'nuxt-webfontloader',
  ],

  /**
   * Google fonts
   */
  webfontloader: {
    google: {
      families: ['Montserrat:900', 'Work+Sans:300'],
    },
  },

  /**
   * Font Awesome
   */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [
          'faTwitter',
          'faCss3',
          'faInstagram',
          'faGithub',
          'faVuejs',
          'faReact',
          'faJs',
          'faDocker',
          'faWordpress',
          'faNodeJs',
          'faYarn',
        ],
      },
    ],
  },

  /**
   * Manifest
   */
  manifest: {
    name: '<Blog Name>',
    short_name: '<Blog Name>',
    lang: 'en',
  },

  /**
   * sitemap
   */
  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    exclude: ['/admin/'],
  },

  /**
   * Robots
   */
  robots: {
    UserAgent: '*',
    Disallow: '/admin',
  },

  /**
   * Generate config
   */
  generate: {
    routes: [
      [].concat(blogs.map((blog) => `/blog/${blog.slug}`)),
      // [].concat(codings.map((coding) => `/coding/${coding.slug}`)),
    ],
  },

  /**
   * Transition
   */
  transition: {
    name: 'fade',
    mode: 'out-in',
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        })
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true,
        },
      })
    },
  },
}
