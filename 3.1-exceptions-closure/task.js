function parseCount(deparce) {
    let item = Number.parseInt(deparce)
    if (isNaN(item)) {
      const parceError = new Error("Невалидное значение")
      throw parceError
    }
    return item
  }
  
  function validateCount(deparce) {
    try {
      let result = parseCount(deparce)
        return result
    } catch {
      return new Error("Невалидное значение")
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
      let s = Math.sqrt(p *(p - this.a) * (p - this.b) * (p - this.c))
      return (Number(s.toFixed(3)))
    }
  }
  
  
  
  function getTriangle(a,b,c) {
    
    try {
      const triangle = new Triangle(a,b,c)
      return triangle
    }
    catch {
        return {
          getArea: function getArea() {
            return 'Ошибка! Треугольник не существует'
          },
          getPerimeter: function getPerimeter() { 
            return 'Ошибка! Треугольник не существует'
          }
        }
    }
  }