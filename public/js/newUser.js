//Change routes, query selector names, have success/fail message append to the page ratehr than the alert? //

const signUpFormHandler = async (event) => {
    event.preventDefault()
  
    const firstName = document.querySelector('#first-name').value.trim()
    const lastName = document.querySelector('#last-name').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()
  
    if (firstName && lastName && email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/')
      } else {
        alert('Please enter all  required fields')
      }
    }
  }
  
  document
    .querySelector('#signup-button')
    .addEventListener('click', signUpFormHandler)