

// Retrieve the current wallet balance from local storage
let walletBalance = localStorage.getItem('walletBalance') || 0;

$(document).ready(function() {
$('form').submit(function(event) {
event.preventDefault(); // Prevent the form from submitting


// Get the form data
const formData = new FormData(this);
const balance = parseFloat(formData.get('balance'));

// Send the AJAX request
$.ajax({
  url: 'update.php',
  type: 'POST',
  data: formData,
  processData: false,
  contentType: false,
  success: function(response) {
    console.log(response); // Log the response to the console
    // Update the wallet balance in local storage and on the page
    walletBalance += balance;
    localStorage.setItem('walletBalance', walletBalance);
    $('.wallet-balance').text(`$${walletBalance.toFixed(2)}`);
    // TODO: Handle the response from the server
  },
  error: function(xhr, status, error) {
    console.log(error); // Log the error to the console
  }
});
});
});

// Update the wallet balance element on the page
$('.wallet-balance').text(`$${walletBalance.toFixed(2)}`);

// Activate the current page in the navigation bar
$('.nav a').each(function() {
if (this.href === window.location.href) {
$(this).addClass('active');
}
});