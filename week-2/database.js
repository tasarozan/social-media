const Flatted = require('flatted')
const fs = require('fs')

const save = function(filename, data) {
    fs.writeFileSync(filename, Flatted.stringify(data))
}
const load = function(filename) {
    return Flatted.parse(fs.readFileSync(filename, 'utf8'))
}
module.exports = {save, load}