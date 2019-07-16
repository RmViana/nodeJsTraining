const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/137746b7b19794ec20897249e41d05ae/'+ latitude +','+ longitude
    request({
        url  : url,
        json : true
    }, (error, response) => {
        if(error){
            callback('Unable to connect to weather service!')
        }else if(response.body.error){
            callback(response.body.error)
        }else{
            callback(undefined, `${response.body.daily.data[0].summary} It's currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast