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
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())


app.listen(3111, function () {
    console.log('Listening on port 3111');
});

// Root
app.post('/', function (req, res) {
    addEmailToMailChimp(req.body.email, req.body.firstname, req.body.lastname);
    res.end('SUCCESSSS!!!');
});

function addEmailToMailChimp(email, firstname, lastname) {
    const request = require('request');
    const config = require('./secretstuff'); // Require sensitive API keys and auth from .gitignored file
    
    var options = {
        method: 'POST',
        url: config.mailchimpUrl,
        headers: {
            'postman-token': config.postmanToken,
            'cache-control': 'no-cache',
            authorization: config.postmanAuth,
            'content-type': 'application/json'
        },
        body: {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: firstname,
                LNAME: lastname
            }
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    });

}