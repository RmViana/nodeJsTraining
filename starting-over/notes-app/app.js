const chalk    = require('chalk')
const getNotes = require('./notes')

const msg = getNotes()

console.log(msg)
console.log(chalk.green.bold.inverse("Success!"))


// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Wade.');

// fs.appendFileSync('notes.txt', '\nAnd my surname is Wilson!');

// const add = require('./utils.js')

// const sum = add(4, -2)

// console.log(sum)