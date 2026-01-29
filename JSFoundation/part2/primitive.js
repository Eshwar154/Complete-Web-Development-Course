//Number 

let balance = 120
let anotherBalance = new Number(120)


// //console.log(balance);
// console.log(typeof(balance));
// console.log(typeof(anotherBalance))
//console.log(anotherBalance.valueOf());


//boolean
let isActive = true
let isreallyActive = new Boolean(true) // not recommended way

//null and undefined

let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);


// string


let myString =  "hello"
let myStringOne = 'Hola'
let username = 'hitesh'
let oldGreet = myString + 'hitesh';
//console.log(oldGreet);

let greetMessage = `Hello ${username} !` //string interpolation can be said as inject string or variable into a string 

let demoOne =  `Value is ${2*2}`
//console.log(demoOne);


//console.log(greetMessage);
//symbol guranteees the uniquess internally it is unique value
let sm1 = Symbol("hitesh")
let sm2 = Symbol("hitesh")

console.log(sm1 == sm2)
console.log(sm1); // internally it is unique value 
console.log(sm2);

