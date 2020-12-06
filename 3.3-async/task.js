class AlarmClock {
    constructor() {
      this.alarmCollection = [],
      this.timerId = null
       
    }
  
    addClock(sometime, fn, id) {
      if (id === undefined) {
        throw new Error('id не был передан в функцию')
      }
      
      try {
        if (this.alarmCollection.find(item => item.id === id) ) {
          throw new Error('id c таким значением существует') }
        else {
          this.alarmCollection.push({id: id, time: sometime, callback: fn})
        }
      } catch(e) { 
        console.error(e)
      }  
    }
  
    removeClock(id) {
     this.alarmCollection.splice(this.alarmCollection.findIndex(item => item.id === id), 1)
    }
  
    getCurrentFormattedTime() {
      function checkTime(i) {
          return (i < 10) ? "0" + i : i;
      }
  
      let time = new Date()
      return checkTime(time.getHours())  + ':' + checkTime(time.getMinutes())
  
    }
  
    start() {
      let secTime = this.getCurrentFormattedTime()
      function checkClock(call) {
        if(secTime === call.time)
          call.callback()   
      }
      if (this.timerId === null) {
        this.timerId = setInterval(()=> this.alarmCollection.every(item => checkClock(item)), 1000)
      }
    }
  
  
    stop() {
      if(this.timerId !== null)
        clearInterval(this.timerId)
        this.timerId = null
    }
  
    printAlarms() {
      this.alarmCollection.forEach(item => console.log(item.id, item.time ))
    }
  
    clearAlarms() {
      this.stop();
      this.alarmCollection.splice(0)
      
    }
  }

  