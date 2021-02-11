const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let city = req.body.city;
     console.log(city);

})

module.exports = router;