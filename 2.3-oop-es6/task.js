class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name,
      this.releaseDate = releaseDate,
      this.pagesCount = pagesCount,
      this._state = 100,
      this.type = null
    }
  
    fix() {
      this._state = this._state * 1.5
      if (this._state > 100)
       this._state = 100
    }
  
    set state(number) {
      if (this._state < 0) {
        this._state = 0
      } 
      else if(this._state > 100) {
       this._state = 100
      } else {
        this._state = number
      }    
    }
  
    get state() {
      return this._state
    }
  }
  
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount)
      this.state = 100,
      this.type = "magazine"  
    } 
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount)
      this.author = author,
      this.state = 100,
      this.type = "book"
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount)
      this.state = 100,
      this.type = "novel"
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount)
      this.state = 100,
      this.type = "fantastic"
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount)
      this.state = 100,
      this.type = "detective"
    }
  }

  class Library {
    constructor(name) {
      this.name = name
      this.books = []
    }
  
    addBook(book) {
      if (book.state > 30)
        this.books.push(book)
    }
  
    findBookBy(type, value) {
      let a;
      for (let i in this.books) {
        for(let j in this.books[i]) {
          if (j === type && this.books[i][j] === value ) {
            a = true;
            return this.books[i]
          } 
        }  
      }
     if (a !== true) 
           return null  
    }
  
    giveBookByName(bookName) {
    
      for (let i = 0; i < this.books.length; i++) {
        if(this.books[i].name === bookName) {  
           return  this.books.splice(i, 1)[0]
        }   
      }
     return null
     }
  }

  class StudentLog {
    constructor(name) {
      this.name = name;
    }
 
    getName() {
      return this.name
    }
 
    addGrade(grade, subject) {
      let gradeArr = []
      if (typeof grade === 'string') {
        console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`)
        return 0
      } else if(grade > 5) {
       console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`) 
      } else { 
        if(!this.hasOwnProperty(subject)) {
           this[subject] = [grade]
           return this[subject].length
        } else {
           this[subject].push(grade)
           return this[subject].length
        }
      } 
    }
 
   getAverageBySubject(subject) {
     let count = 0;
     
     for (let i in this[subject]) {
       count = count + this[subject][i]
     }
     if (!this.hasOwnProperty(subject)){
       return 0
     }
     return (count/this[subject].length)
   }
 
   getTotalAverage() {
     let count = 0;
     let count2 = 0;
     for (let i in this) {
       count = count + 1
       if(i !== 'name') {
         count2 = count2 + this.getAverageBySubject(i)
       }  
     }
     if (count2 === 0)
       return 0 
     return (count2/(count - 1))
   } 
  }