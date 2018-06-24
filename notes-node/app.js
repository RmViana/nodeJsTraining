console.log('Starting app.js');

const fs    = require('fs');
const os    = require('os');
const _     = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Wade'));

var filterArray = _.uniq(['Romildo', 1, 'Romildo', 1, 2, 3, 4]);
console.log(filterArray);

// console.log('Result : ', notes.add(9, -2));

// var user = os.userInfo();
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
