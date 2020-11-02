'use strict';

function getResult(a,b,c) {
    // код для задачи №1 писать здесь
    let diskr = b ** 2 - 4 * a * c;
    let x = [];
    if (diskr > 0) {
     let x1 = (-(b) + Math.sqrt(diskr))/ (2 * a);
     let x2 = (-(b) - Math.sqrt(diskr))/(2 * a);
     x.push(x1, x2);
     return x 
    } else if (diskr === 0) {
       let x1 = (-(b) + Math.sqrt(diskr))/(2 * a);
       x.push(x1);
       return x;
    } else {
      return x
    }
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    function countAvg (arr) {
        let count = 0;
    
        for (let i in arr) {
          count = count + arr[i]
        }
        
        let result = count/arr.length
        return result
      } 
    
      if (marks.length === 0)
        return 0;
      if (marks.length <= 5) {
        return countAvg(marks)
      }
      if (marks.length > 5) {
        let spliceArr = (marks.length - 6) + marks.length - 1;
        marks.splice(5, spliceArr);
        return countAvg(marks)
      }  
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let result;
    let year = dateOfBirthday.getFullYear();
    let date = new Date().getFullYear();
    let age = date - year;
    if (age > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    
     return result;
}