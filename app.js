/* 
Main point of entry for our backend. 
Responsible for setting up our app, 
processing any POST requests sent to our server,
and adding users emails to MailChimp.
*/

const express = require('express');
const app = express();

// Middleware
app.use(express.static(__dirname + '/public'))

app.listen(3111, function () {
    console.log('Listening on port 3111');
});

// Root
/* app.get('/', function (req, res) {
    res.end('yoooooo');
}); */