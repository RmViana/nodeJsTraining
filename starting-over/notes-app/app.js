const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Wade.');

fs.appendFileSync('notes.txt', '\nAnd my surname is Wilson!');
