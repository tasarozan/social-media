const express = require('express')
const router = express.Router()
const Tweet = require('../models/tweet')

router.get('/all', async (req, res) => {
  const tweets = await Tweet.find()
  res.render('users', { items: tweets })
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