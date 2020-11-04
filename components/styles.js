const config = require('../config');

const stylesTemplate = config => `
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/monokai-sublime.min.css">
    <link rel="stylesheet" type="text/css" href="/styles.css?ver=${config.assetVersion}" media="all" />
`
module.exports = stylesTemplate(config);
