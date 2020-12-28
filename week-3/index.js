  // const User = require('./user')
  // const Tweet = require('./tweet')
  // const Chalk = require('chalk')
  const Database = require('./database')
  // const User = require('./user')
  const afterLoadingDatabase = (err, loadedFile) => {
    if(err) {
      console.log('There is an error', err)
      return
    }
    loadedFile.forEach(x => console.log(x.username))
  }
 
    
  //  const ozan = new User('cat47lyst', 'Ozan TASAR')
  //  const berk = new User('berkXD', 'Berk USLU')
  //  const furkan = new User('furkanradiela', 'Furkan İLGENCİ')
  //  const mertcan = User.create({username:'mertcanpsycho', name:'Mert Can Gökdağ'})
  
  
   
     
  //  furkan.sendTweet('SELAM 🍻')
  //  furkan.sendTweet('Sorry')
  //  ozan.sendTweet('SIL BUNU')
  //  berk.sendTweet('BUNE OLM')
  //  mertcan.sendTweet('S.A')
  
  //  berk.follow(ozan)
  //  berk.follow(furkan)
  //  furkan.follow(ozan)
  //  ozan.follow(furkan)
  //  ozan.follow(mertcan)
  
  //  ozan.likeTweet(furkan.tweets[0])
  //  berk.likeTweet(furkan.tweets[0])
  //  furkan.likeTweet(furkan.tweets[0])
  //  ozan.likeTweet(mertcan.tweets[0])
   

  //  ozan.retweet(furkan.tweets[0])

  //  ozan.unfollow(furkan)
  
  //  Database.save('user.json', [ozan, furkan, berk, mertcan]) 
  
  
  Database.load('user.json', afterLoadingDatabase)
  
  
  
  
  
  
  
  
  