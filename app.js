/* 
Main point of entry for our backend. 
Responsible for setting up our app, 
processing any POST requests sent to our server,
and adding users emails to MailChimp.
*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(express.static(__dirname + '/public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.listen(3111, function () {
    console.log('Listening on port 3111');
});

// Root
app.post('/', function (req, res) {
    console.log(req.body.email);
    res.end('SUCCESSSS!!!');
});