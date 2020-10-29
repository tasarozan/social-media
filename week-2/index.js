  const User = require('./user')
  const Tweet = require('./tweet')
  const Chalk = require('chalk')
  const Database = require('./database')
 
    
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
  
  Database.save('user.json', ozan) 
  
  
  const loadedFile = Database.load('user.json')
  console.log(loadedFile.name)
  
  
  
  