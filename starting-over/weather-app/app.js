const request = require('request')

const url = 'https://api.darksky.net/forecast/137746b7b19794ec20897249e41d05ae/37.8267,-122.4233'

request({
    url : url,
    json : true
}, (error, response) => {
    console.log(`${response.body.daily.data[0].summary} It's currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
})