// Make our comment form submit via AJAX

function submitComment(event) {
  event.preventDefault();
  console.log('hey you nailed it!');
}

$(document).ready(function() {
  $('#new_comment').submit(submitComment);
});

// CLIENT SIDE //
// Listen to button click or form submission
// Read values from the form (authorName, body, articleID)
// Post to the endpoint on the server, probably using jQuery $.post

// SERVER SIDE //
// Create action needs to take the posted data
// Create the record
// Return some response (JSON? HTML?)
// Add the new comment to the UI when the server responds
// Make it match all the other comments
