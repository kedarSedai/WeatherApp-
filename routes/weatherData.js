const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/', (req, res) =>{
    
})

router.post('/weatherData', (req, res) => {
    var city = req.body.city;
    //  res.json({"name":"city"})

    fetch('https://api.github.com/users/github')
    .then(res => res.json())
    .then(json => console.log(json.login))

    res.render('weatherData')
     console.log(city)
});

module.exports = router;