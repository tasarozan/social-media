const express = require('express')
const router = express.Router()
const Tweet = require('../models/tweet')
const User = require('../models/user')

router.get('/all', async (req, res) => {
  const tweets = await Tweet.find()
  const users = await User.find()
  res.render('tweets', { items: tweets, people: users})
})

router.get('/all/json', async (req, res) => {
  const tweets = await Tweet.find()
  res.send(tweets)
})

router.get('/:id', async (req, res) => {
  const tweet = await Tweet.findById(req.params.id)
  res.render('data', { data: tweet })
})

router.post('/', async (req, res) => {
  const tweet = await Tweet.create(req.body)
  res.send(tweet)
})

router.delete('/:id', async (req, res) => {
  const tweet = await Tweet.findByIdAndDelete(req.params.id)
  res.send(tweet)
})


module.exports = router