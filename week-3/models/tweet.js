module.exports = class Tweet {
    text = ''
    likes = []
    author = ''
    retweets = []
  
    constructor(text, author) {
      this.text = text
      this.author = author.name
    }
  }