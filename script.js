setTimeout(function() {
  location.reload();
}, 10000);
// Get the login button element
const loginButton = document.getElementById('login-button');

// Add a click event listener to the login button
loginButton.addEventListener('click', login);

// Define the login function
function login() {
  // Get the values of the username and password fields
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password are correct
  if (username === 'teamwafflesadmin' && password === 'admin') {
    // Redirect to the protected.html page
    window.location.replace('ADMIN.HTML');
  } else {
    // Show an error message
    alert('Invalid username or password');
  }
}
