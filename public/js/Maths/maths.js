const monthlybillsEL = document.querySelector('#monthly-bills')
const monthlyincomeEL = document.querySelector('#monthly-income')
const leaves = document.querySelector('#leaves')
const checkingEL = document.querySelector('#checking-account')





console.log()


const leftOverCalculation = () => {
  let arr = monthlybillsEL.innerHTML.split(",").filter(data => data != '').map(data => parseInt(data))
  let x = 0
  arr.forEach(element => {
    x += element
  });
  
  let income = parseInt(monthlyincomeEL.innerHTML)
  let billtotal = x
  let leftover = income - billtotal

  monthlyincomeEL.textContent = `$${income.toLocaleString()}`
  monthlybillsEL.textContent = ` - $${billtotal.toLocaleString()}`

  if(leftover < 0){ leftover *= -1; leaves.textContent = `- $${leftover.toLocaleString()}`}
  else{leaves.textContent = `+ $${leftover.toLocaleString()}`}
  
}


const newCheckingBalance = () => {

}

leftOverCalculation()

