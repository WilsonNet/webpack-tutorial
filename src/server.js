const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/hello-world/', function (req, res) {
  const pathToHtml = path.resolve(__dirname, '../dist/hello-world.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtml, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.get('/kiwi/', function (req, res) {
  const pathToHtml = path.resolve(__dirname, '../dist/kiwi.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtml, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.use('/static', express.static(path.resolve(__dirname, '../dist')))
app.listen(3333, function () {
  console.log('Application is running on on http://localhost:3333');
});
