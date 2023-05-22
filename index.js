const express = require('express')
const port = 3000
const app = express()

app.use('/', (_, res) => {
  return res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
