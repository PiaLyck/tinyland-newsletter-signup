var $ = require('jquery');

$('form').submit(function (event) {
    event.preventDefault();
    console.log("submit is called");
    $.ajax({
        url: '/',
        type: 'POST',
        data: {
            email: 'pia@pia.com',
        },
        success: function (response) {
            console.log(response);
        }
    });
});

