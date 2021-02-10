const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Tweet = require('../models/tweet')

router.get('/all', async (req, res) => {
  const users = await User.find()
  res.render('users', { people: users })
})

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  res.render('data', { data: user })
})

router.post('/', async (req, res) => {
  const user = await User.create(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id)
  res.send(user)
})

router.post('/:id/tweets', async (req, res) => {
  const user = await User.findById(req.params.id)

  const tweet = await user.sendTweet({text: req.body.text})

  res.send(tweet)  
})

router.get('/:id/tweets', async (req, res) => {
    const user = await User.findById(req.params.id)
    const tweets = await Tweet.find()
    res.render('data', { data: user.tweets })
  })

module.exports = router