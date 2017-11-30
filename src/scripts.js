import {
    error
} from 'util';

var $ = require('jquery');

$('form').submit(function (event) {

    // Get form inputs
    var userEmail = $('#email-address').val();
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();

    // Prevent page from reloading
    event.preventDefault();

    // Call app.js's app.post('/')... method
    $.ajax({
        url: '/',
        type: 'POST',
        data: {
            email: userEmail,
            firstname: firstName,
            lastname: lastName
        },
        error: function (error) {
            console.log("ERROR: " + JSON.stringify(error));
        },
        success: function (response) {
            console.log(response);
        },

    });
});