function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    for (let i in arguments) {
        if (typeof arguments[i] !== 'number') {
          arguments[i] = Number(arguments[i])
          if (isNaN(Number(arguments[i]))) {
            console.log('Невозможно преобразовть к числу')
            break
          } 
        }
      }
      
      let year1 = new Date(date).getFullYear();
      let month1 = new Date(date).getMonth();
      let year2 = new Date().getFullYear();
      let month2 = new Date().getMonth();
      let numberOfMonths = (year1 - year2) * 12 + (month1 - month2);
      
      
      let bodyMortage = amount - contribution;
      let precentItem = percent / 1200;
      let payment = bodyMortage * (precentItem + precentItem / (((1 + precentItem) ** numberOfMonths ) - 1))
      let totalAmount = (payment * numberOfMonths).toFixed(2);
      console.log(totalAmount)
      return Number(totalAmount);
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (arguments.length === 0 || name === "") {
      return "Привет, мир! Меня зовут Аноним."
    } else {
      return `Привет, мир! Меня зовут ${name}.`
    }
    
}