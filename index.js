const express = require('express')

const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use (express.json())

app.use(notFound)
app.use(errorHandler)




app.get('/', (req, res) => {
  res.send('Server del mio blog')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})