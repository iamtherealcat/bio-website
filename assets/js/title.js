// Array containing different titles to cycle through
var titles = [
  "pxnda",
  "pxnda i",
  "pxnda is",
  "pxnda is c",
  "pxnda is co",
  "pxnda is coo",
  "pxnda is cool"
];

// Function to change the title periodically
function changeTitle() {
  var index = 0; // Initialize index to start from the first title

  // Set interval to change the title every 1000 milliseconds (1 second)
  setInterval(function() {
      // Set the document title to the title at the current index
      document.title = titles[index];
      // Increment the index and use modulo operator to ensure it stays within the bounds of the array
      index = (index + 1) % titles.length;
  }, 400); // Interval set to 1000 milliseconds (1 second)
}

changeTitle();
