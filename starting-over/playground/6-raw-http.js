const https = require('https')
const url   = 'https://api.darksky.net/forecast/137746b7b19794ec20897249e41d05ae/40,-75'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()