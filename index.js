const express = require('express')
const app = express()
const port = 5000
app.use(express.json())
app.use('/api', require('./api/users/Router'))
app.use('/api', require('./api/products/Router'))
app.use('/api', require('./api/brand/Router'))
app.use('/api', require('./api/category/Router'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})