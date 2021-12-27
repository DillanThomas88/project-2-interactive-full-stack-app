//Change routes, have success/fail message append to the page rather than the alert? //

const signUpFormHandler = async (event) => {
  event.preventDefault()
  
  const firstName = document.querySelector('#first-name').value.trim()
  const lastName = document.querySelector('#last-name').value.trim()
  const email = document.querySelector('#email-signup').value.trim()
  const password = document.querySelector('#password-signup').value.trim()
  
  if (firstName && lastName && email && password) {
    let user = {
      firstName,
      lastName,
      email,
      password
    }
    console.log(user)
      const response = await fetch('/api/users/new', {
        method: 'POST',
        body: JSON.stringify({ user }),
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
    .addEventListener('submit', signUpFormHandler)