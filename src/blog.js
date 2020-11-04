const config = require("../config");
const fs = require("fs");

const navTemplate = require('../components/nav');
const footerTemplate = require('../components/footer');
const scriptTemplate = require('../components/scripts');
const metaTagsTemplate = require('../components/meta');
const stylesTemplate = require('../components/styles');

const blogTemplate = posts => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${config.siteDescription}" />
    <title>Blog - ${config.siteName}</title>
    ${stylesTemplate}
  </head>
  <body>
    ${navTemplate}
    <main id="wrap">
      <section>
        <h1>Blog</h1>

        <p>
          I've been writing online since 2014, mostly about web development and tech careers. In total, I've written 56 articles on this site. Use the search below to filter by title.
        </p>

        <div class="search">
          <input aria-label="Search articles" placeholder="Search articles" class="search__input" id="search__input">
          <div class="search__icon">
            <svg viewBox="0 0 24 24" focusable="false" role="presentation" class="search__svg">
              <path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
            </svg>
          </div>
        </div>
      </section>

      <section>
        <h2>All Posts</h2>

      ${posts.map(post => `
        <a class="card page-link" href="/blog/${post.path}">
          <p class="card__title">${post.attributes.title}</p>
          <small>${new Date(parseInt(post.attributes.date)).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: '2-digit' })}</small>
          <p class="card__excerpt">${post.attributes.description}</p>
        </a>
      `).join("")}
      </section>
    </main>
    ${footerTemplate}
    ${scriptTemplate}
  </body>
</html>
`;

const addBlogPage = posts => {
  if (!fs.existsSync(`${config.distDir}/${config.blogDir}`)) {
    fs.mkdirSync(`${config.distDir}/${config.blogDir}`, {recursive: true});
  }

  fs.writeFile(
    `${config.distDir}/${config.blogDir}/index.html`,
    blogTemplate(posts),
    e => {
      if (e) throw e;
      console.log(`/blog was created successfully`);
    }
  );
};

// module.exports = addBlogPage;
export default addBlogPage;
