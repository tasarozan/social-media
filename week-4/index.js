const UserService = require('./services/user-service')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/user/all', async (req, res) => {
  const people = await UserService.findAll()
  res.render('user', {people})
})
app.get('/user/:id', async (req, res) => {
  const id = req.params.id
  const person = await UserService.find(id)
  res.send(person)
})
app.post('/user', async (req, res) => {
  const person = await UserService.add(req.body)
  res.send(person)
})
app.delete('/user/:id', async (req, res) => {
  await UserService.del(req.params.id)
})
app.listen(3000, () => {
  console.log('Server Listening')
})
