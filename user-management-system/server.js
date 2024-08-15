// import the dependencies
const express = require('express');
const axios = require('axios');

// initialising express
const app = express();

// requesting a page on the browser by requesting the server...
app.get('/', (req,res) => {
    res.send("USER MANAGEMENT SYSTEM");
})
app.listen(3000, () => {console.log(`Server running on http://localhost:${3000}`);
 })