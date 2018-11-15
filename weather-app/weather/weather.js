// 137746b7b19794ec20897249e41d05ae
const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({
    url : `https://api.darksky.net/forecast/137746b7b19794ec20897249e41d05ae/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature : body.currently.temperature,
          apparentTemperature : body.currently.apparentTemperature,
          timezone : body.timezone
        });
    } else {
        callback('Unable to fetch weather.');
    }
  });
}

module.exports.getWeather = getWeather;
