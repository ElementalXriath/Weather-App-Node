const path = require('path');
const express = require('express');
const hbs = require('hbs');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();

// Define paths for Express
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Handle Bars SetUp
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Set Up Static Dir for serve
app.use(express.static(path.join(__dirname, '../public')))

//Routes

app.get('', (req, res) => {
    res.render('index', {
       
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
       
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Welcome to the help center'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Enter Address'
        })
    } 
    geocode(req.query.address, (error, {latitude, longitude, location}) => {
        if (error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) =>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

  
})  

app.get('*', (req, res) => {
    res.send("404 Error")
})







// Port Listen 3000- Local
app.listen(3000, () => {
    console.log('Server Started')
})