const express = require('express')
const serveIndex = require('serve-index')

const app = express()

app.use(
  '/files',
  express.static('public'),
  serveIndex('public', { icons: true })
)

app.listen(3000, () => console.log('Server Up and Running'))
