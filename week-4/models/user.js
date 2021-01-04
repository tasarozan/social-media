const Tweet = require('./tweet')
module.exports = class User {

  username = ''
  name = ''
  followers = []
  followings = []
  tweets = []
  retweets = []
  likes = []
    

  constructor(username, name, id) {
    this.username = username
    this.name = name   
    this.id = id 
  }
  sendTweet(tweetText) {
    const tweet = new Tweet(tweetText, this)
    this.tweets.push(tweet)
  }
  likeTweet(tweet) {
    const iDidLike = tweet.likes.some(user => user.username === this.username)

    console.log(this.name + " liked " + tweet.author + "'s tweet!")

    if (iDidLike) {
      throw new Error('DAHA ONCE BEGENDIN?')
    } else {
      tweet.likes.push(this)
      this.likes.push(tweet)
    }
  }
  retweet(againtweet) {

    const iDidRt = againtweet.retweets.some(user => user.username === this.username)

    console.log(this.name + " retweeted " + againtweet.author + "'s tweet! ")
    console.log(againtweet.text)

    if (iDidRt) {
      throw Error('DAHA ONCE RTLEDİN!!')
    }
    else {
      againtweet.retweets.push(this)

      this.retweets.push(againtweet)

    }

  }
  follow(userToFollow) {
    this.followings.push(userToFollow)
    userToFollow.followers.push(this)
  }
  unfollow(userToUnfollow) {
    this.followings = this.followings.filter(following => following.username !== userToUnfollow.username)
    userToUnfollow.followers = userToUnfollow.followers.filter(follower => follower.username !== this.username)

  }
  static create({username, name, id}) {
    return new User(username,name,id)
  }
  
}






