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
            email: userEmail
        },
        success: function (response) {
            console.log(response);
        }
    });
});