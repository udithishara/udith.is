const config = require('../config');
const fm = require('front-matter');
const fs = require('fs');
const hljs = require('highlight.js');
// const MarkdownIt = require('markdown-it');
// const md = new MarkdownIt();

const md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="language-'+lang+'"><code class="language-'+lang+'">' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (err) {
        console.log(err)
      }
    }

    return '<pre><code class="language-default">' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});

const navTemplate = require('../components/nav');
const footerTemplate = require('../components/footer');
const scriptTemplate = require('../components/scripts');
const metaTagsTemplate = require('../components/meta');
const stylesTemplate = require('../components/styles');

const path = require('path');

// metaTagsTemplate.configure(42);

// var person1 = new metaTagsTemplate('James', 'Bond');


const postTemplate = data => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${data.attributes.description}" />
    <title>${data.attributes.title}</title>
    ${stylesTemplate}
    ${metaTagsTemplate(data.attributes, config)}
  </head>
  <body>
    ${navTemplate}
    <main id="wrap">
      <header>
        <h1>${data.attributes.title}</h1>

        <div class="header__meta">
          <div class="header__meta-container">
            <img class="header__meta-image" src="${config.authorImage}" alt="${config.siteName}">
            <span class="header__author-date">
              ${config.authorName} / ${new Date(parseInt(data.attributes.date)).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: '2-digit' })}
            </span>
          </div>
          <span class="header__read-time">5 min read</span>
        </div>
      </header>
      <article>
        ${data.body}
      </article>
    </main>
    ${footerTemplate}
    ${scriptTemplate}
  </body>
</html>
`;

function countWords(str){
  console.log(str)
	s = str;
	s = s.replace(/<(\/*?)(?!(\s*\/))\w+?.+?>/g,'');
	s = s.replace(/[ ]{2,}/gi,'');
  s = s.replace(/\s\s+/g,'');
	return s.length;
}



const convertToHTML = postPath => {
  // const data = fs.readFileSync(`${config.postsDir}/${postPath}.md`, "utf8");
  const data = fs.readFileSync(path.join(config.postsDir, postPath + '.md'), "utf8");
  const content = fm(data);
  content.body = md.render(content.body);

  console.log(content.attributes.title, countWords(content.body));
  // console.log(content.body)
  
  content.path = content.attributes.slug;
  return content;
};

const savePosts = posts => {
 
  posts.forEach(post => {
    if (!fs.existsSync(`${config.distDir}/blog/${post.path}`)) {
      fs.mkdirSync(`${config.distDir}/blog/${post.path}`, {recursive: true});
    }

    // console.log(postTemplate(post))

    fs.writeFile(
      `${config.distDir}/blog/${post.path}/index.html`,
      postTemplate(post),
      e => {
        if (e) throw e;
        console.log(`/blog/${post.path}/index.html was created successfully`);
      }
    );
  });
};

module.exports = {
  convertToHTML: convertToHTML,
  savePosts: savePosts
};
