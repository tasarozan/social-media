const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')
const tweetRouter = require('./routes/tweet')
require('./mongo-connection')

const app = express()

app.use(bodyParser.json())
app.set('view engine', 'pug')

app.use('/users', userRouter)
app.use('/tweet', tweetRouter)

app.get('/', (req, res) => {
  res.render('index')
})
app.listen(3000, () => {
  console.log('Server Listening')
})
