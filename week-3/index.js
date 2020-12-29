const User = require('./models/user')
const Tweet = require('./models/tweet')
const UserService = require('./services/user-service')
const TweetService = require('./services/tweet-service')

const afterLoadingDatabase = (err, loadedFile) => {
  if (err) {
    console.log('There is an error', err)
    return
  }
  loadedFile.forEach(x => console.log(x.username))
}

async function main() {

  const ozan = new User('cat47lyst', 'Ozan TASAR')
  const berk = new User('berkXD', 'Berk USLU')
  const furkan = new User('furkanradiela', 'Furkan İLGENCİ')
  const mertcan = User.create({ username: 'mertcanpsycho', name: 'Mert Can Gökdağ' })

  await UserService.add(ozan)
  await UserService.add(berk)
  await UserService.add(furkan)
  await UserService.add(mertcan)

  const people = await UserService.findAll()

  console.log(people[0].name)

  //  await UserService.del(1)
  furkan.sendTweet('SELAM 🍻')
  furkan.sendTweet('Sorry')
  ozan.sendTweet('SIL BUNU')
  berk.sendTweet('BUNE OLM')
  mertcan.sendTweet('S.A')

  berk.follow(ozan)
  berk.follow(furkan)
  furkan.follow(ozan)
  ozan.follow(furkan)
  ozan.follow(mertcan)

  ozan.likeTweet(furkan.tweets[0])
  berk.likeTweet(furkan.tweets[0])
  furkan.likeTweet(furkan.tweets[0])
  ozan.likeTweet(mertcan.tweets[0])

  ozan.retweet(furkan.tweets[0])
  
}
main()







