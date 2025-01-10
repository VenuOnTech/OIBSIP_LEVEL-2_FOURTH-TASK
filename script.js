document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Dummy login validation
  if (username === 'admin' && password === 'admin@1234') {
    document.getElementById('message').textContent = 'Login successful!';
    document.getElementById('message').style.color = 'green';
  } else {
    document.getElementById('message').textContent = 'Invalid username or password.';
    document.getElementById('message').style.color = 'red';
  }
});
