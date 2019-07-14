const request = require('request')

const url = 'https://api.darksky.net/forecast/137746b7b19794ec20897249e41d05ae/37.8267,-122.4233'

request({
    url : url
}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})