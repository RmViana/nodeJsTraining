const path    = require('path')
const express = require('express')
const hbs     = require('hbs') 

const app = express()

//Defines paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath           = path.join(__dirname, '../templates/views')
const partialsPath        = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather App',
        name : 'Wade Wilson'
    })
})

app.get('/about', (req, res) => res.render('about', {
    title : 'About me',
    name : 'Wade Wilson'
}))

app.get('/help', (req, res) => res.render('help', {
    helpText : 'This is some helpful text.',
    title : 'Help',
    name : 'Wade Wilson'
}))

app.get('/weather', (req, res) => {
    res.send({
        forecast : 'It\'s 20 degrees out there.',
        location : 'São Paulo'
    })
})

app.get('/help/*', (req, res) => res.render('404', {
    title : '404',
    name : 'Wade Wilson',
    message : 'Help article not found!'
}))

app.get('*', (req, res) => {
    res.render('404', {
        title : '404',
        name : 'Wade Wilson',
        message : 'Page not found!'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})