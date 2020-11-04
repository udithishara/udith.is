const config = require("../config");
const MarkdownIt = require('markdown-it'), md = new MarkdownIt();

// console.log(result);

const fs = require('fs');
const glob = require('glob');
const path = require('path');

var frontMatter = require('front-matter');




fs.readFile('./posts/example.md', 'utf8', function(err, data){
  if (err) throw err;
  var content = frontMatter(data);

  // console.log(content.attributes);
  var result = md.render(content.body);
  // console.log(result);
});


// try {
//   const data = fs.readFileSync('./posts/example.md');
//   console.log(data.toString());
// } catch (err) {
//   console.error(err);
// }





function convertToHtml(data) {
  return md.render(data)
}

function formatFrontMatter(data) {
  return frontMatter(data);
}

function readFile(path) {
  return new Promise((resolve,reject) => {
    let data = '';

    const readStream = fs.createReadStream(path, 'utf8');

    readStream.on('data', function (chunk) {
      data += chunk;
    }).on('error', e => {
      reject(e);
    }).on('end', function () {
      // console.log(data);
      resolve(data);
    });
  });
}

function fsWriteFile(path, html) {
  fs.writeFile(path, html, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('HTML saved!');
  });
}

function fsCreateWriteStream(path, html) {
  let writeStream = fs.createWriteStream(path);

// write some data with a base64 encoding
  writeStream.write(html, 'utf-8');

// the finish event is emitted when all data has been flushed from the stream
  writeStream.on('finish', () => {
    console.log('wrote all data to file');
  });

// close the stream
  writeStream.end();
}

function findFiles() {
  glob('./posts/*.md', function (err, files) {
    if (err) {
      console.log(err);
    } else {
      // a list of paths to javaScript files in the current working directory
      console.log(files);
      files.map((name) => {
        console.log(path.basename(name))
      })
    }

  });
}

findFiles();

// readFile('./posts/nuxt-jam-stack.md').then((response) => {
//     // console.log(response)
//     let formattedData = formatFrontMatter(response);
//     console.log(formattedData.attributes);
//     let html = convertToHtml(formattedData.body);
//     console.log(html);
//     // fsWriteFile('./posts/nuxt-jam-stack.md', html)
//     fsCreateWriteStream('./dist/blog/nuxt-jam-stack.html', html);
//     console.log("----------");
//   }
// );



