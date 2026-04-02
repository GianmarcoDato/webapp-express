const express = require('express')

const errorHandler = require('./middleware/errorsHandler')
const notFound = require('./middleware/notFound')
const app = express()


app.use(express.static('public'))
app.use (express.json())

app.use(notFound)
app.use(errorHandler)




app.get('/', (req, res) => {
  res.send('Server del mio blog')
})



app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening on port ${process.env.APP_PORT}`)
})