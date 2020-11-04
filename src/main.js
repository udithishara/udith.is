const fs = require('fs');
const config = require("../config");
const posts = require("./posts");
const addHomePage = require("./index");
const addBlogPage = require('./blog');
const add404Page = require('./404');

const glob = require('glob');
const path = require('path');

fs.rmdirSync(config.distDir, { recursive: true });

// const posts = fs
//   .readdirSync(config.postsDir)
//   .map(post => post.slice(0, -3))
//   .map(post => postMethods.convertToHTML(post))
//   .sort(function(a, b) {
//     return b.attributes.date - a.attributes.date;
//   });
//
// // console.log(posts);
//
//
// if (!fs.existsSync(config.distDir)) fs.mkdirSync(config.distDir, {recursive: true});
//
// postMethods.savePosts(posts);
// addHomePage(posts);


const globPosts = glob
  .sync('*.md', { cwd: config.postsDir })
  .map(filepath => path.basename(filepath, '.md'))
  .map(post => posts.convertToHTML(post))
  .sort(function(a, b) {
    return b.attributes.date - a.attributes.date;
  });

// console.log(globPosts);

posts.savePosts(globPosts);
addHomePage(globPosts);
addBlogPage(globPosts);
add404Page(globPosts);

if (!fs.existsSync(config.distDir)) fs.mkdirSync(config.distDir, {recursive: true});

const files = ['app.js', 'styles.css', 'favicon.ico'];
files.forEach(file => {
  fs.copyFile('public/' + file, 'dist/' + file, (err) => {
    if (err) throw err;
    console.log(file + ' has been copied');
  });
})



// var getAllFileNames = function() {
//   return [].concat(
//     glob
//       .sync('*.md', { cwd: config.postsDir })
//       .map((filepath) => path.basename(filepath, '.md'))
//   )
// }

// console.log(getAllFileNames());


// const globPosts = glob
//   .sync('*.md', { cwd: config.postsDir })
//   .map(filepath => path.basename(filepath, '.md'))
//   .map(post => posts.convertToHTML(post))
//   .sort(function(a, b){
//     return b.attributes.date - a.attributes.date;
//   });


// console.log(globPosts);
