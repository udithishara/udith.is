export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
      },
    ],
  },
  srcDir: 'src/',
  router: {
    linkActiveClass: 'nav__link--active',
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles/main.scss'],
  loading: {
    color: '#222d63',
    height: '5px',
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  // components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    liveEdit: false,
  },
  generate: {
    dir: 'dist',
    subFolders: false, // HTML files are generated according to the route path
    fallback: '404.html',
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  lintOnSave: false,
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: '/udithishara/',
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['frontmatter-markdown-loader'],
      })
    },
  },
}
