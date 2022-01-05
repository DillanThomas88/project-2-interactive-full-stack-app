///ADD CHECKING AND SAVINGS INFO ///

const accountsHandler = async (event) => {
    event.preventDefault()
    
    const checking = document.querySelector('#checking-amount').value.trim()
    const savings = document.querySelector('#savings-amount').value.trim()
    
    
    if (checking && savings) {
      let account = {
        checking_account: checking,
        savings_account: savings,
      }
      console.log(account)
        const response = await fetch('/api/accounts', {
          method: 'PUT',
          body: JSON.stringify(account),
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
      .querySelector('#account-save-button')
      .addEventListener('click', accountsHandler)


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

