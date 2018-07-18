console.log('Starting app.js');

const fs    = require('fs');
const _     = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  var message = note ? `Note created!\nTitle: ${note.title}\nBody: ${note.body}` : 'Note title already in use.';
  console.log(message);
}else if(command === 'list'){
  notes.getAll();
}else if(command === 'read'){
  var note = notes.getNote(argv.title);
  var message = note ? `Note read!\nTitle: ${note.title}\nBody: ${note.body}` : 'Note not found.';
  console.log(message);
}else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else{
  console.log('Command not recognized');
}
