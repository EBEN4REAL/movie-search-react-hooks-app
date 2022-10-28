// const express = require('express')
// const path = require('path');

// const app = express()
// const port = process.env.PORT || 3000 // Heroku will need the PORT environment variable

// app.use(express.static(path.join(__dirname, 'build')));

// app.listen(port, () => console.log(`App is live on port ${port}!`))


var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);
const path = require('path')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join('build', 'index.html'));
    });
  }