// const config = require('../config');

const metaTagTemplate = config => `
<link rel="shortcut icon" href="/news/favicon.png" type="image/png" />
<meta name="description" content="Page description. No longer than 155 characters." />

<!-- Twitter Card data -->
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@publisher_handle">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description less than 200 characters">
<meta name="twitter:creator" content="@author_handle">

<!-- Open Graph data -->
<meta property="og:title" content="Title Here" />
<meta property="og:type" content="article" />
<meta property="og:url" content="http://www.example.com/" />
<meta property="og:image" content="http://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
`
// module.exports = {
//   metaTagTemplate: metaTagTemplate(config)
// };


// module.exports = function (firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = function () { 
//         return this.firstName + ' ' + this.lastName;
//     }
// }


module.exports = (title, url, description, config) => {
  console.log(config)
  // return 'x is ' + metaData.title;
  return `
  <meta ${title} />
  <meta name="${url}" />
  <meta ${description} />
  <meta name="description" content="${description}" />
  
  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@udithishara">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:creator" content="@author_handle">
  
  <!-- Open Graph data -->
  <meta property="og:title" content="Title Here" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="http://www.example.com/" />
  <meta property="og:image" content="http://example.com/image.jpg" />
  <meta property="og:description" content="${description}" />
  `
};
