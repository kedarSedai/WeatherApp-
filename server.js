const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

//importing routes 
const weatherRoute = require('./routes/weatherData');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose
    .connect(process.env.DB_CONNECTION, {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Database not connected'));

app.use('/get', weatherRoute);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => console.log(`Server is running at ${port}`));