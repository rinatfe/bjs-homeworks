

  function parseCount(deparce) {
    if (isNaN(Number.parseInt(deparce))) {
       
      throw new Error('Невалидное значение')
    }
    return Number.parseInt(deparce)
  }
  
  function validateCount(deparce) {
    try {
  
      return parseCount(deparce)
  
    } catch(error) {
  
       return error
    }  
  }
  
  
  class Triangle {
    constructor(a,b,c) {
      this.a = a,
      this.b = b,
      this.c = c
  
      if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
        let triangleError = new Error('Треугольник с такими сторонами не существует')
        throw triangleError;
      }  
    }
  
    getPerimeter() {
      return (Number(this.a + this.b + this.c))
    }
  
    getArea() {
      let p = 0.5 * (this.a + this.b +this.c)
      return (Number(Math.sqrt(p *(p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)))
    }
  }
  
  
  
  function getTriangle(a,b,c) {
    
    try {
      return new Triangle(a,b,c)
    }
    catch {
        return {
          getPerimeter: () => 'Ошибка! Треугольник не существует',
          getArea: () =>  'Ошибка! Треугольник не существует'
        }  
    }
  }