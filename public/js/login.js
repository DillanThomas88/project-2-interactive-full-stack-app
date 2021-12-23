//Change routes, have success/fail message append to the page rather than the alert? //


const loginFormHandler = async (event) => {
    event.preventDefault();

    const userEmail = document.querySelector('#username').value.trim();
    const userPassword = document.querySelector('#password').value.trim();
  
    if (userEmail && userPassword) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ userEmail, userPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('#login-button')
    .addEventListener('click', loginFormHandler);