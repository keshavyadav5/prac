

function add(a, b) {                           // function
  return a + b;
}

function sub(a, b) {                         //function  
  return a - b;
}

let array = [1, 2, 3, 4, 5];                    // this array to be passed as module

const object = {
  country: "Nepal",
  capital: "Kathmandu",
  homeTown: "Janakpur",
}

module.exports = { add, sub, array, object };