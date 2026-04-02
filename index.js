const express = require('express')
const movieRouter = require('./routers/movieRouter')
const errorHandler = require('./middleware/errorsHandler')
const notFound = require('./middleware/notFound')
const app = express()


app.use(express.static('public'))
app.use (express.json())
app.use("/api/movies", movieRouter)
app.use(notFound)
app.use(errorHandler)




app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening on port ${process.env.APP_PORT}`)
})