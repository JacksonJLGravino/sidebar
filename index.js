const express = require('express')
const path = require('path')
const routes = require('./routes/routes')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
//app.set('views', path.join(__dirname, '/views/pages'))

app.use(routes)

app.listen(5000, () => {
  console.log(`Servidor rodnado em http://localhost:5000`)
})
