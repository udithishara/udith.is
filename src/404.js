const config = require("../config");
const fs = require("fs");

const navTemplate = require('../components/nav');
const footerTemplate = require('../components/footer');
const scriptTemplate = require('../components/scripts');
const metaTagsTemplate = require('../components/meta');
const stylesTemplate = require('../components/styles');

const err404 = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${config.siteDescription}" />
    <title>404 - ${config.siteName}</title>
    ${stylesTemplate}
  </head>
  <body>
    ${navTemplate}
    <main id="wrap">
      <section>
        <h1>Oh no!</h1>

        <p>
          The page you were looking for could not be found
        </p>

        <a type="button" href="/" class="btn">Return Home</a>
      </section>
    </main>
    ${footerTemplate}
    ${scriptTemplate}
  </body>
</html>
`;


const add404Page = () => {
  if (!fs.existsSync(`${config.distDir}/404}`)) {
    fs.mkdirSync(`${config.distDir}/404`, {recursive: true});
  }

  fs.writeFile(
    `${config.distDir}/404/index.html`,
    err404(),
    e => {
      if (e) throw e;
      console.log(`/404 was created successfully`);
    }
  );
};

module.exports = add404Page;
