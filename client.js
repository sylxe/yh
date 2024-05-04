$(document).ready(function() {
    $('#commandForm').submit(function(event) {
        event.preventDefault();
        var command = $('#commandInput').val();
        submitCommand(command);
    });
});

function submitCommand(command) {
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:5000/submit-command',
        data: { command: command },
        success: function(response) {
            console.log('Response:', response); // Log the response to the console
            $('#response').html('Command submitted successfully.');
        },
        error: function(xhr, status, error) {
            $('#response').html('Error submitting command.');
            console.error(xhr.responseText);
        }
    });
}
