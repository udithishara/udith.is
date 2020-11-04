const config = require("../config");
const fs = require("fs");

const navTemplate = require('../components/nav');
const footerTemplate = require('../components/footer');
const scriptTemplate = require('../components/scripts');
const metaTagsTemplate = require('../components/meta');
const stylesTemplate = require('../components/styles');

const homeTemplate = posts => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${config.siteDescription}" />
    <title>Home - ${config.siteName}</title>
    ${stylesTemplate}
  </head>
  <body>
    ${navTemplate}
    <main id="wrap">
      <h1>/Home</h1>
      <p>—</p>
      <p>This blog is written by ${config.authorName}, ${config.authorDescription}. To find out what he's up to <a href="${config.authorTwitter}">follow him on twtter</a></p>
      <hr />

      <div class="posts" style="display: none;">
        ${posts.map(post => `
          <div class="post">
            <h3><a href="./${post.path}">${post.attributes.title}</a></h3>
            <small>${new Date(parseInt(post.attributes.date)).toDateString()}</small>
            <p>${post.attributes.description}</p>
          </div>
        `).join("")}
      </div>
    </main>
    ${footerTemplate}
    ${scriptTemplate}
  </body>
</html>
`;

const addHomePage = posts => {
  fs.writeFile(`${config.distDir}/index.html`,
  homeTemplate(posts),
  e => {
    if (e) throw e;
    console.log(`index.html was created successfully`);
  });
};

module.exports = addHomePage;
