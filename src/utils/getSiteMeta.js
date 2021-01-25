export default (meta) => {
  return [
    // Common
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || global.siteDesc,
    },
    // Open Graph
    // https://ogp.me
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || global.siteType,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || global.siteUrl,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || global.siteTitle,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || global.siteDesc,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.mainImage) || global.mainImage,
    },
    {
      hid: 'og:image:secure_url',
      property: 'og:image:secure_url',
      content: (meta && meta.mainImage) || global.mainImage,
    },
    {
      hid: 'og:image:width',
      property: 'og:image:width',
      content: '700',
    },
    {
      hid: 'og:image:height',
      property: 'og:image:height',
      content: '360',
    },
    // Twitter
    // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || global.siteTitle,
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.url) || global.siteUrl,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || global.siteDesc,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.mainImage) || global.mainImage,
    },
    {
      name: 'twitter:site',
      content: global.siteName,
    },
    {
      name: 'twitter:creator',
      content: global.twitterHandle || '',
    },
  ]
}
