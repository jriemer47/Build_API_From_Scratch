const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const uuid = require('uuid/v4')
const db = require('./db/snacks.js')

app.disable('x-powered-by')

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(bodyParser.json())

const snackRouters = require('./src/routes/snacks.js')
app.use('/snacks', snackRouters)








app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
module.exports = app