const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
 return weapons.map(item => item.name)
}

function getCountReliableWeapons(durability) {
    return weapons.filter(item => item.durability > durability).length
}

function hasReliableWeapons(durability) {
    return weapons.some(item => item.durability > durability)  
}

function getReliableWeaponsNames(durability) {
    let one = weapons.filter(item => item.durability > durability)
    return one.map(item => item.name)
}

function getTotalDamage() {
    let total = 0;
    let result = weapons.map(item => total += item.attack)
    return result[result.length - 1]  
}

function getValuestCountToSumValues(arr, total) {
    let one = arr.map(item => total = total - item) 
    return one.filter(item => item >= -1).length
}


function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100); 
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }
  
  
function compareArrays( arr1, arr2 ) {
    return arr1.every((value,index) => value === arr2[index])
}

function memorize(fn, limit) {
    const memory = [];
    return function comeback(...args){
        let end = fn(...args)
        let found = memory.find(item => compareArrays(args, item.args))
        if( found !== undefined) {
            return found.result
          
        } else {
            memory.push({args:args, result:end })
            if(memory.length > limit)
                memory.shift()    
            return end
        } 
    }
}
