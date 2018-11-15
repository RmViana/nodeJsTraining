const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyB5lD9sP7GAKVHkDhgZBl_W2KCT3zIVWFA',
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});
