
const monthlybillsEL = document.querySelector('#monthly-bills')
const monthlyincomeEL = document.querySelector('#monthly-income')
const leaves = document.querySelector('#leaves')
const checkingEL = document.querySelector('#checking-account')

const dueDateEL = document.querySelector('#formal-due')
const beforeEL = document.querySelector('#due-before')
const newCheckingEL = document.querySelector('#new-checking')

const billCostEL = document.querySelectorAll('.bill-cost')
const billNameEL = document.querySelectorAll('.bill-name')


billCostEL.forEach(element => {   

  let x = parseInt(element.innerHTML).toLocaleString()
    element.textContent = `$${x}`
});

// not finished!
// billNameEL.forEach(element => {
//   let arr = element.split("")
//   let index = undefined
//       for(let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if(element === "&"){ index = i}
//       }
//       let arr2 = arr.filter(data => data != "&").map(data => data.toUpperCase())
//       if(index != undefined){
//         arr = arr2.splice(index,0, "&") 
//       }

//   element.textContent = `${arr.join("")}`
// })


const leftOverCalculation = () => {
  let arr = monthlybillsEL.innerHTML.split(",").filter(data => data != '').map(data => parseInt(data))
  let x = 0
  arr.forEach(element => {
    x += element
  });
  console.log(x);
  
  let income = monthlyincomeEL.innerHTML
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

