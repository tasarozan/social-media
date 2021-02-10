const mongoose = require('mongoose')
const Tweet = require('./tweet')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  followers: Array,
  followings: Array,
  tweets: [{
    isRetweet: {
      type: Boolean,
      default: false
    },
    tweet: {
      type: mongoose.Types.ObjectId,
      ref: 'Tweet',
      autopopulate: {
        maxDepth: 1
      }
    }
  }],
  likes: [{
    type: mongoose.Types.ObjectId,
    ref: 'Tweet',
    autopopulate: {
      maxDepth: 1
    }    
  }]
})

UserSchema.loadClass(class User {
  async sendTweet({ text }) {
    const tweet = await Tweet.create({ text, author: this._id })
    this.tweets.push({tweet})

    await this.save()

    return tweet
  }
})

UserSchema.plugin(require('mongoose-autopopulate'))

const UserModel = mongoose.model('User', UserSchema)



module.exports = UserModel







