const request = require('request');
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config()
const router = express.Router();

var api = process.env.API_key;


router.get('/', (req, res) =>{
    
});

router.post('/', (req, res) => {
    var city = req.body.city;
    // //  res.json({"name":"city"})
     let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api}`;


    // fetch('https://api.github.com/users/github')
    // .then(res => res.json())
    // .then(json => console.log(json.login))

    // res.render('weatherData')
    //  console.log(city)

    request(url, function(err, response, body){

        if(err){
            res.render('index', {weather:null, error:'Please try again'});
        }else{
            let weather = JSON.parse(body);
            if(weather.main == undefined){
                res.render('index', {weather:null, error:'Please try again'});
            }else{
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', {weather: weatherText, error: null});
            }
        }

    });
})

module.exports = router;