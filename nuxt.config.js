export default {
  vue: {
    config: {
      devtools: true,
    },
  },
  target: 'static',
  srcDir: 'src/',
  router: {
    linkExactActiveClass: 'nav__link--active',
  },
  css: ['~/assets/styles/main.scss'],
  modules: ['@nuxt/content'],
  loading: {
    color: '#222d63',
    height: '5px',
  },
  generate: {
    dir: 'dist',
    subFolders: false, // HTML files are generated according to the route path
  },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
  build: {
    publicPath: '/udith/',
  },
}
