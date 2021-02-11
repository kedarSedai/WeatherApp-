const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

//importing routes 
const weatherRoute = require('./routes/weatherData');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Import database 
const db = require('./dbSetup/dbSetup').mongoURI;

mongoose
    .connect(db, {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Database not connected'));

app.get('/', (req, res) => {
    res.render('index')
})

//test route
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/get', weatherRoute);

app.listen(port, () => console.log(`Server is running at ${port}`));