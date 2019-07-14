const request = require('request')
const chalk   = require('chalk')

const url = 'https://api.darksky.net/forecast/137746b7b19794ec20897249e41d05ae/37.8267,-122.4233'

request({
    url : url,
    json : true
}, (error, response) => {
    console.log(`${response.body.daily.data[0].summary} It's currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm12aWFuYSIsImEiOiJjankzNDR3ZXUwb2x6M2xsZ2hnd2ZoN2puIn0.pbhnWi2pWPleL5Mag0bOQQ&limit=1' 

request({
    url  : geocodeURL,
    json : true
}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(chalk.blue.underline(latitude), chalk.blue.underline(longitude))
})