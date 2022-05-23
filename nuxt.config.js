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
    script: [
      {
        type: 'text/javascript',
        src:
          'https://cmp.osano.com/Azz7t5T6Qh5qDAVb/0a0a6c25-b5ee-4aa7-a040-bf75060eab7d/osano.js',
        async: 'async',
      },
    ],


    title: 'Good Stuff Creations –  Websites for local producers and groceries',
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
        content: `https://gscreations.io`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'Good Stuff Creations - Websites for local producers and groceries',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Good stuff creations creates websites and e-commerce for local producers and groceries',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Good stuff creations helps local producers sharing their product with the world ',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: '~/assets/Svg/gs.svg',
      },
      {
        hid: 'og:article:author',
        property: 'og:article:author',
        content: 'https://github.com/mugas',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Good Stuff Creations',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      { name: 'twitter:site', content: '@g_s_creations' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content:
          'Good Stuff Creations - websites for local producers and groceries',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Good Stuff Creations - websites for local producers and groceries',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /**
   * Plugins
   */
  plugins: [{ src: '~/plugins/lazyload' }, { src: '~/plugins/prism' }],

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
    'vue-plausible',

  ],




  plausible: {
    domain: 'gscreations.io',
  },
  /**
   * Google fonts
   */
  webfontloader: {
    google: {
      families: ['Bodoni Moda', 'Open Sans'],
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
          'faFacebook',
          'faVuejs',
          'faReact',
          'faJs',
          'faDocker',
          'faWordpress',
          'faNodeJs',
          'faYarn',
          'faLinkedin',
        ],
      },

    ],
  },

  /**
   * Manifest
   */
  manifest: {
    name: 'Good Stuff Creations',
    short_name: 'Good Stuff Creations',
    lang: 'en',
  },

  /**
   * sitemap
   */
  sitemap: {
    hostname: 'https://gscreations.io',
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
