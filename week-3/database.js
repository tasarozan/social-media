const Flatted = require('flatted')
const fs = require('fs')

const save = function(filename, data) {
    fs.writeFile(filename, Flatted.stringify(data))
}
const load = function(filename, handler) {
    fs.readFile(filename, 'utf8', (err, file) => {
        if(err) {
            console.log('there is a read error', err)
            handler(err)
            return
        }
        handler(null, Flatted.parse(file))
    })
}
module.exports = {save, load}