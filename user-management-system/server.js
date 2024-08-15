// import the dependencies
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv')
// initialising express
const app = express();

// dotenv.config({path : 'config.env'})
// initilize he port address using dotenv 
const PORT = process.env.PORT || 8080
// requesting a page on the browser by requesting the server...
app.get('/', (req,res) => {
    res.send("USER MANAGEMENT SYSTEM");
})
app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`);
 })