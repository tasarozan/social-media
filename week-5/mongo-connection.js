const mongoose = require('mongoose')

async function main () {
  await mongoose.connect('mongodb://localhost/test', {useUnifiedTopology: true, useNewUrlParser: true})
}

main()