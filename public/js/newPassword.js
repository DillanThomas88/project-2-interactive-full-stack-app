//Change routes, query selector names, have success/fail message append to the page ratehr than the alert? //

const newPassFormHandler = async (event) => {
    event.preventDefault();
  
    const newPassword = document.querySelector('#new-password').value.trim();
  
    if (newPassword) {
      const response = await fetch('/api/users/login', {
        method: 'PUT',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Please enter a valid password');
      }
    }
  };
  
  document
    .querySelector('#new-pass-form')
    .addEventListener('click', newPassFormHandler);