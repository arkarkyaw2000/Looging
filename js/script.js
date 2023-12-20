function showSignUp() {
  document.querySelector('.container').classList.add('sign-up-mode');
}

function showSignIn() {
  document.querySelector('.container').classList.remove('sign-up-mode');
}

function signUp() {
  const username = document.getElementById('signUpUsername').value;
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;

  // Perform signup logic (add your code here)
  console.log('Sign Up:', { username, email, password });

  // For simplicity, let's switch to the sign-in panel after sign-up
  showSignIn();
}

function signIn() {
  const username = document.getElementById('signInUsername').value;
  const password = document.getElementById('signInPassword').value;

  // Perform sign-in logic (add your code here)
  console.log('Sign In:', { username, password });
}
