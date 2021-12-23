//Change routes, query selector names have success/fail message append to the page ratehr than the alert? //
//Figure out how to trigger an email//

const requestPassResetFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
  
    if (email) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Please enter a valid email');
      }
    }
  };
  
  document
    .querySelector('#request-pass-reset-button')
    .addEventListener('click', requestPassResetFormHandler);