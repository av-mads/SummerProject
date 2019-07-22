const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
var index = require('./Routes/index.js')

// Use routes
app.use('/', index);

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }).then(console.log('con sucess'));

// Routes
app.get('/', (req, res) => {
    res.send('Home')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});