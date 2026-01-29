// let sum = 0;

// //let i=1;
// while(i<=5){
//    // sum=sum+i
//     sum +=i
//     i++;
// }

// console.log(sum);

// let countdown = []
// let i=5;
// while(i>=1){
//     countdown.push(i)
//     i--;
// }
// console.log(countdown);

// let teacollection = []
// let tea

// do{
//   tea = prompt( `Enter your favourite tea (type "stop" to finish)`)

//  if(tea!=="stop"){
//     teacollection.push(tea)
//  }

// }while(tea !== "stop");

let total = 0
let k = 1;

do{
  total +=k
  k++
}while(k<=3);

console.log(total)

let multipliedNumbers = []
let numbers = [2,4,6]
let value;
for (let i = 0; i < numbers.length; i++) {
    //    value =numbers[i]*2
    //    multipliedNumbers.push(value)
    multipliedNumbers.push(numbers[i]*2);
    
}

console.log(multipliedNumbers);


let cities =[ "Paris","New York","Tokyo","London"];

let citylist = []

for (let i = 0; i < cities.length; i++) {
    citylist.shift(cities[i]);
    
}
console.log(citylist)