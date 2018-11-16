const express = require('express');
const hbs     = require('./node_modules/hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  // res.send({
  //   name: 'Wade',
  //   likes: [
  //     "chess",
  //     "technology"
  //   ]
  // });
  res.render('home.hbs', {
    pageTitle : 'Home Page',
    welcomeMessage : 'Welcome to my Website!'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle   : 'About Page',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: "Unable to handle request"
  });
});

app.listen(3000, () => {
  console.log(__dirname);
  console.log('Server is up on port 3000');
});
