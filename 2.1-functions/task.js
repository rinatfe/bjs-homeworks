function getSolutions(a, b, c) {
    let d = (b ** 2) - (4 * a * c);
    if (d < 0) {
      return { D: d, roots: [] }
    } else if (d === 0) {
      let x1 = -(b) / (2 * a);
      return { D: d, roots: [x1] }
    } else {
      let x1 = (-(b) + Math.sqrt(d))/ (2 * a);
      let x2 = (-(b) - Math.sqrt(d))/(2 * a);
      return { D: d, roots: [x1, x2] }
    } 
  }
  

  
  function showSolutionMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`)
    if (result.D < 0) {
      console.log('Уравнение не имеет вещественных корней')
    } else if (result.D === 0) {
      console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)
    } else {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    }
  }

  function getAverageScore(data) {
    let arr = [];
    let size = 0;
  
    for (let i in data) {
      size = size + 1
      arr.push(getAverageMark(data[i]))
      data[i] = getAverageMark(data[i])  
    }
    
    data.average = getAverageMark(arr)
    return data
  }

  function getAverageMark(marks) {
    let count = 0;
    
    if (marks.length === 0) {
      console.log(`не содержит оценок`)
      return 0
    } else {
      for (let i in marks) { 
        count = count + marks[i]
      }
      let avg = count/marks.length
      return avg
    } 
  }


  function getPersonData(secretData) {
    let decoderData = {};
    for(let i in secretData) {
      if (i === 'aaa')
         decoderData.firstName = getDecodedValue(secretData[i]);
      if (i === 'bbb')
          decoderData.lastName = getDecodedValue(secretData[i]);
    }
    return decoderData
  }
  function getDecodedValue(secret) {
    let arr = ['Родриго', 'Эмильо']
    return arr[secret]
  }