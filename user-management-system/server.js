// import the dependencies
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
// no need to install this path module bcz it is inbuilt in node
const path = require('path');
// initialising express
const app = express();

// dotenv.config({path : 'config.env'})
// initilize he port address using dotenv 
const PORT = process.env.PORT || 8080

// log the message/request
app.use(morgan('tiny'));
//parse the request to body parser from the URL encoded
app.use(bodyparser.urlencoded({extended:true}))

//set the view engine: here we are using ejs as an emedded javascript
app.set("view engine", "ejs");
// will have to give a path to the ejs files if in case inside views folder there is an anohter folder(s)
//  app.set("views", path.resolve(__dirname, 'views/ejs_files'))
// __dirname: current project directory name

// load assets: so that while calling the path, you dont have to mention the path right ffrom the root directory... ou can just mention css/style.css (if there is a file inside css folder) look how..!
app.set('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.set('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.set('/js', express.static(path.resolve(__dirname, 'assets/js')))


// requesting a page on the browser by requesting the server...
app.get('/', (req,res) => {
    res.send("USER MANAGEMENT SYSTEM");
})
app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`);
 })