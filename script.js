function signUp() {
  const signUpUsername = document.getElementById('signUpUsername').value;
  const signUpEmail = document.getElementById('signUpEmail').value;
  const signUpPassword = document.getElementById('signUpPassword').value;

  const userData = {
    username: signUpUsername,
    email: signUpEmail,
    password: signUpPassword,
  };

  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Handle the response from the server as needed
    alert('User created successfully'); // You might want to display a message to the user
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors here
    alert('Error creating user'); // Display an error message to the user
  });
}

