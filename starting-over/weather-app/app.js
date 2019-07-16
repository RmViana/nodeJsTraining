const request = require('request')
const chalk   = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const url = 'https://api.darksky.net/forecast/137746b7b19794ec20897249e41d05ae/37.8267,-122.4233'

// request({
//     url : url,
//     json : true
// }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if(response.body.error){
//         console.log('Unable to find location!')
//     }else{
//         console.log(`${response.body.daily.data[0].summary} It's currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
//     }

// })


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

geocode('São Paulo', (error, data) => {
    if(error){
        console.log('Error', error)
    }
    else{
        forecast(data.latitude, data.longitude, (error, data) => {
            console.log('Error', error)
            console.log('Data', data)
          })
    }
})