// Wait for the DOM to fully load before adding functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get the button and paragraph elements
    const button = document.getElementById('actionBtn');
    const messageParagraph = document.getElementById('message');

    // Add an event listener to the button
    button.addEventListener('click', function() {
        // Change the text inside the paragraph when button is clicked
        messageParagraph.innerHTML = "You clicked the button! The JavaScript worked.";
    });
});
