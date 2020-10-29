class User {
    username = ''
    name = ''
    followers = []
    followings = []
    tweets = []
    retweets = []
    likes = []
  
    constructor(username, name) {
      this.username = username
      this.name = name
    }
    sendTweet(tweetText) {
      const tweet = new Tweet(tweetText, this)
      this.tweets.push(tweet)
    }
    likeTweet(tweet) {
      const iDidLike = tweet.likes.some(user => user.username === this.username)
  
      console.log(this.name + " liked "+ tweet.author.name + "'s tweet!")
  
      if (iDidLike) {
        throw new Error('DAHA ONCE BEGENDIN?')
      } else {
        tweet.likes.push(this)
      }
    }
    retweet(againtweet){
      
       const iDidRt = againtweet.retweets.some(user => user.username === this.username)
        
        console.log(this.name + " retweeted " + againtweet.author.name + "'s tweet! ")
        console.log(againtweet.text)

        if (iDidRt) {
            throw Error ('DAHA ONCE RTLEDİN!!')
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
       this.followings = this.followings.filter(following => following.username !==  userToUnfollow.username)       
       userToUnfollow.followers = userToUnfollow.followers.filter(follower => follower.username !== this.username)

    }
    
  }
  
  class Tweet {
    text = ''
    likes = []
    author = ''
    retweets = []
  
    constructor(text, author) {
      this.text = text
      this.author = author
    }
  }
  
  const ozan = new User('cat47lyst', 'Ozan TASAR')
  const berk = new User('berkXD', 'Berk USLU')
  const furkan = new User('furkanradiela', 'Furkan İLGENCİ')
  
  
  
  furkan.sendTweet('SELAM 🍻')
  furkan.sendTweet('Sorry')
  ozan.sendTweet('SIL BUNU')
  berk.sendTweet('BUNE OLM')
  
  berk.follow(ozan)
  berk.follow(furkan)
  furkan.follow(ozan)
  ozan.follow(furkan)
  
  ozan.likeTweet(furkan.tweets[0])
  berk.likeTweet(furkan.tweets[0])
  furkan.likeTweet(furkan.tweets[0])

  ozan.retweet(furkan.tweets[0])

  ozan.unfollow(furkan)

  
  console.log(furkan.followers)
  console.log('done.')