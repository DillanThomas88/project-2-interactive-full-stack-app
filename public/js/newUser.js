//Change routes, have success/fail message append to the page rather than the alert? //
const signUpFormHandler = async (event) => {
  console.log('hello')
  event.preventDefault()
  
  const firstName = document.querySelector('#first-name').value.trim()
  const lastName = document.querySelector('#last-name').value.trim()
  const email = document.querySelector('#email-signup').value.trim()
  const password = document.querySelector('#password-signup').value.trim()
  
  if (firstName && lastName && email && password) {
    let user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password
    }
    console.log(user)
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify(user),
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