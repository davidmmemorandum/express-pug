const express = require('express')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000

function readJsonFileSync(filepath, encoding){
  if (typeof (encoding) == 'undefined'){
      encoding = 'utf8';
  }
  var file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
}

function getConfig(file){
  var filepath = __dirname + '/' + file;
  return readJsonFileSync(filepath);
}

json = getConfig('data.json');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .get('/', (req, res) => res.render('index', json))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
