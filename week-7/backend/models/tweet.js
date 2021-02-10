const mongoose = require('mongoose')
const UserModel = require('./user')

const TweetSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 1
  },
  author: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  likes: [{
    type: mongoose.Types.ObjectId,
    ref: 'User',
    autopopulate: {
      maxDepth: 1
    }    
  }],
  retweets: Array
})
const TweetModel = mongoose.model('Tweet', TweetSchema)

module.exports = TweetModel

