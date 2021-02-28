const express = require('express')
const path = require('path')
const PORT = process.env.PORT

express()
  .use(express.static(path.join(__dirname, 'dist')))
  .set('dist', path.join(__dirname, 'dist'))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('dist/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))