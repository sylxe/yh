$(document).ready(function() {
    // Make an AJAX request to fetch the command response
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:5000/get-response', // Replace with your server URL for fetching response
        success: function(response) {
            displayResponse(response);
        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            displayError('Error fetching response.');
        }
    });
});

function displayResponse(response) {
    // Display the response in the responseContent div
    $('#responseContent').html('<p>' + response + '</p>');
}

function displayError(message) {
    // Display an error message
    $('#responseContent').html('<p style="color: red;">' + message + '</p>');
}
