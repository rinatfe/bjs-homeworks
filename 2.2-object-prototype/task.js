//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function() {
    let len = this.length;
    let str = this.toUpperCase();
    let mid = Math.floor(str.length/2);
  
    for (let i = 0; i < len; i++) {
      if (str[i] === ' ') {
        str = str.split(str[i]).join('')
      }
    }
    
    
    for ( let i = 0; i < mid; i++ ) {
      let len2 = str.length
      if (str[i] !== str[len2 - 1 - i]) {
        return false;
      }
    }
      return true; 
  }

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let count = 0;
    if (marks.length === 0) {
        return 0
    }
    for (let i in marks) {
        count = count + marks[i]
    }
    let average = count/marks.length
    let roundedAverage = Math.round(average)
    return roundedAverage
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let date = new Date();
    let now = date.getTime();
    console.log(now)
    let result;
    let date2 = new Date (birthday)
    let birthday1 = date2.getTime();
    let dif = (now - birthday1);
    let age = (dif / 31536000000)
    if (age > 18) {
        result = true;
    } else {
        result = false;
    }
    
     return result;

}