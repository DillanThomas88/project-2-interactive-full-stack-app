///ADD CHECKING AND SAVINGS INFO ///

const checkingAccountHandler = async (event) => {
  event.preventDefault()

  const checkingAccount = document.querySelector('#checking-account')
  const checkingAccountBalance = document.querySelector('#checking-account-amount').value.trim()


  if (checkingAccount && checkingAccountBalance) {
    let checkingAccountData = {
      name: checkingAccount,
      amount: checkingAccountBalance,
    }
    console.log(checkingAccountData)
    const response = await fetch('/api/checking-account', {
      method: 'PUT',
      body: JSON.stringify(checkingAccountData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert('Please enter amounts for checking and savings.')
    }
  }
}
document
  .querySelector('#checking-account-save-button')
  .addEventListener('click', checkingAccountHandler)

//////
const savingsAccountsHandler = async (event) => {
  event.preventDefault()

  const savingsAccount = document.querySelector('#savings-account')
  const savingsAccountBalance = document.querySelector('#savings-account-amount').value.trim()


  if (savingsAccount && savingsAccountBalance) {
    let savingsAccountData = {
      name: savingsAccount,
      amount: savingsAccountBalance,
    }
    console.log(savingsAccountData)
    const response = await fetch('/api/savings-account', {
      method: 'PUT',
      body: JSON.stringify(accountData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert('Please enter amounts for checking and savings.')
    }
  }
}
document
  .querySelector('#savings-account-save-button')
  .addEventListener('click', savingsAccountsHandler)


///ADD BILLS ///
const billsHandler = async (event) => {
  event.preventDefault()

  const billName = document.querySelector('#bill-name').value.trim()
  const billCost = document.querySelector('#bill-cost').value.trim()
  const billDueDate = document.querySelector('#bill-due-date').value.trim()
  const billIsAutoPay = document.querySelector('#bill-is-auto-pay').value.trim()
  const billIsDebited = document.querySelector('#bill-is-debited').value.trim()

  if (billName && billCost && billDueDate && billIsAutoPay && billIsDebited) {
    let billInfo = {
      name: billName,
      cost: billCost,
      due_date: billDueDate,
      auto_pay: billIsAutoPay,
      debited: billIsDebited,
    }
    console.log(billInfo)
    const response = await fetch('/api/bills', {
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

////ADD CARDS////
const cardsHandler = async (event) => {
  event.preventDefault()

  const cardName = document.querySelector('#bill-name').value.trim()
  const cardAmount = document.querySelector('#bill-cost').value.trim()
  const cardDueDate = document.querySelector('#bill-due-date').value.trim()


  if (cardName && cardAmount && cardDueDate) {
    let cardInfo = {
      name: cardName,
      amount: cardAmount,
      due_date: cardDueDate,
    }
    console.log(cardInfo)
    const response = await fetch('/api/cards', {
      method: 'POST',
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
document
  .querySelector('#card-save-button')
  .addEventListener('click', cardsHandler)

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
      alert('Please complete all fields.')
    }
  }
}
document
  .querySelector('#income-save-button')
  .addEventListener('click', incomeHandler)



/////UPDATE NEXT PAYDAY/////
const paydayHandler = async (event) => {
  event.preventDefault()

  const nextPayday = document.querySelector('#next-payday').value.trim()


  if (nextPayday) {
    let paydayData = {
      payday: paydayData,
    }
    console.log(paydayData)
    const response = await fetch('/api/income', {
      method: 'PUT',
      body: JSON.stringify(paydayData),
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
  .querySelector('#payday-save-button')
  .addEventListener('click', paydayHandler)

