///ADD CHECKING AND SAVINGS INFO ///


const svgTakenBoolean = async (event) => {
  event.preventDefault()

  // ---------- need to finish
  let billId = event.target
  let billStatus = event.target
  let billInfo = {
    id: billId,
    debited: billStatus
  }
  console.log(billInfo)
  const response = await fetch('/api/put/bills', {
    method: 'POST',
    body: JSON.stringify(billInfo),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/')

  } else {
    alert('Please complete all fields.')
  }
}
const svgEL = document.querySelectorAll('.svg-taken')
svgEL.forEach(element => {

  element.addEventListener('click', svgTakenBoolean)
});

const accountHandler = async (event) => {
  event.preventDefault()
  let target = event.target

  const account_amount = target.parentElement.parentElement.children[0].textContent.split("$").filter(data => data != "$").join("")
  const account_name = target.parentElement.children[0].textContent.toLowerCase()


  if (account_name && account_amount) {
    let accountData = {
      name: account_name,
      amount: account_amount
    }
    console.log(accountData)
    const response = await fetch('/api/dash/account', {
      method: 'PUT',
      body: JSON.stringify(accountData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert('Please enter an amount.')
    }
  }
}
const accountEL = document
  .querySelectorAll('.account-save-button')


accountEL.forEach(element => {
  element.addEventListener('click', accountHandler)
});


const monthlyIncomeHandler = async (event) => {
  event.preventDefault()

  const monthlyIncome = event.target.parentElement.parentElement.parentElement.children[1].innerHTML.split("$").filter(data => data != "$").join("")
  console.log(monthlyIncome)


  if (monthlyIncome) {
    let data = {
      monthly_income: monthlyIncome,
    }
    console.log(data)
    const response = await fetch('/api/put/income', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert('Please enter an amount.')
    }
  }
}
const monthlyEL = document.querySelector('#monthly-income-clickable').addEventListener('click', monthlyIncomeHandler)

///ADD BILLS ///
const billsHandler = async (event) => {
  event.preventDefault()
  console.log(event.target)

  const billName = document.querySelector('#bill-name').value.trim()
  const billCost = parseInt(document.querySelector('#bill-cost').value.trim())
  const billDueDate = document.querySelector('#bill-due-date').value
  const billIsAutoPay = document.querySelector('#bill-is-auto-pay').checked;
  // const billIsDebited = document.querySelector('#bill-is-debited').value.trim()
  console.log(billName, billCost, billDueDate, billIsAutoPay)

  if (billName && billCost && billDueDate && billIsAutoPay) {
    let billInfo = {
      name: billName,
      cost: billCost,
      due_date: billDueDate,
      auto_pay: billIsAutoPay,
      debited: false,
    }
    console.log(billInfo)
    const response = await fetch('/api/dash/bills', {
      method: 'POST',
      body: JSON.stringify(billInfo),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert('Please complete all fields.')
    }
  }
}
document
  .querySelector('#bill-save-button')
  .addEventListener('click', billsHandler)

////ADD CARDS////Need to initialize with sample info at id: 1
const cardsHandler = async (event) => {
  event.preventDefault()

  const cardName = document.querySelector('#card-name').value.trim()
  const cardAmount = document.querySelector('#card-amount').value.trim()
  const cardDueDate = document.querySelector('#card-due-date').value.trim()


  if (cardName && cardAmount && cardDueDate) {
    let cardInfo = {
      name: cardName,
      amount: cardAmount,
      due_date: cardDueDate,
    }
    console.log(cardInfo)
    const response = await fetch('/api/cards', {
      method: 'PUT',
      body: JSON.stringify(cardInfo),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert('Please complete all fields.')
    }
  }
}
// document
//   .querySelector('#card-save-button')
//   .addEventListener('click', cardsHandler)

///UPDATE MONTHLY INCOME//////
const incomeHandler = async (event) => {
  event.preventDefault()

  const monthlyIncome = document.querySelector('#monthly-income').value.trim()


  if (monthlyIncome) {
    let monthlyIncomeData = {
      income: monthlyIncome,
    }
    console.log(monthlyIncomeData)
    const response = await fetch('/api/income', {
      method: 'PUT',
      body: JSON.stringify(monthlyIncomeData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert('Please enter a value.')
    }
  }
}
// document
//   .querySelector('#income-save-button')
//   .addEventListener('click', incomeHandler)



/////UPDATE NEXT PAYDAY/////
const paydayHandler = async (event) => {
  event.preventDefault()

  const nextPayday = document.querySelector('#next-payday').value.trim()


  if (nextPayday) {
    let paydayData = {
      payday: paydayData,
    }
    console.log(paydayData)
    const response = await fetch('/api/payday', {
      method: 'PUT',
      body: JSON.stringify(paydayData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert('Please enter a value.')
    }
  }
}
// document
//   .querySelector('#payday-save-button')
//   .addEventListener('click', paydayHandler)