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
    return weapons
    .filter(item => item.durability > durability)
    .map(item => item.name)
}

function getTotalDamage() {
    return weapons.map(item => item.attack).reduce((a,b)=> a + b)  
}

function getValuestCountToSumValues(arr, total) {  
    return arr.filter(item => (total = total - item) >= -1).length 
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
    return arr1.every((value,index) => value === arr2[index] && arr1.length === arr2.length)
}

function memorize(fn, limit) {
    const memory = [];
    return function comeback(...args){
        let found = memory.find(item => compareArrays(args, item.args))
        if (found) {
            return found.result
        } 
        let end = fn(...args)
        memory.push({args:args, result:end })
        if (memory.length > limit)
          memory.shift()    
        return end   
    }
}
