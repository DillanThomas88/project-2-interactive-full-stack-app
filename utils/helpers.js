

module.exports = {
  
  dateData: () => {
    const month = ["January", "February", "March", "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
    const date = new Date()

    const year = date.getFullYear()
    const nextYear = 1;
    const day = date.getDate()
    const nextMonth = date.getMonth()+1

    if(nextMonth >11){
      nextMonth = 0
      nextYear += year
    } else { nextYear = year }

    return {
      month: month[date.getMonth()],
      day: day,
      year: date.getFullYear(),
      formalDate: `${month[date.getMonth()]} ${day}, ${year}`,
      formalDueDate: `${month[nextMonth]} ${day}, ${nextYear}`,
      informalDate: `${date.getMonth()+1}/${day}/${year}`,
      informalDueDate: `${nextMonth+1}/${day}/${nextYear}`
    }
  },
};
