//Change routes, have success/fail message append to the page rather than the alert? //

const newPassFormHandler = async (event) => {
    event.preventDefault();
  
    const newPassword = document.querySelector('#new-password').value.trim();
  
    if (newPassword) {
      const response = await fetch('/api/users/reset', {
        method: 'PUT',
        body: JSON.stringify({ newPassword }),
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