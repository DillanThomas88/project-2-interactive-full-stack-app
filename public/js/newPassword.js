//Change routes, have success/fail message append to the page rather than the alert? //

const newPassFormHandler = async (event) => {
    event.preventDefault();
  
    const newPassword = document.querySelector('#new-password').value.trim();
    const confirmNewPassword = document.querySelector('#confirm-new-password').value.trim();
  
    if (newPassword = confirmNewPassword) {
      
      console.log(newPassword)
      const response = await fetch('/api/users/reset', {
        method: 'PUT',
        body: JSON.stringify({ newPassword }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Please make sure passwords match');
      }
    }
  };
  
  document
    .querySelector('#new-pass-form')
    .addEventListener('click', newPassFormHandler);