// let teatype =["green tea","black tea","chai","oolang tea"]

// let selectedTeas= []

// for (let i = 0; i < teatype.length; i++) {
//     if(teatype[i] === "chai"){
//         break;
//     }
//     selectedTeas.push(teatype[i])
 
// }

// console.log(selectedTeas)

// let cities=["London","New York","Paris","Berlin"]

// let visitedcities =[]

// for (let i = 0; i < cities.length; i++) {
//     if(cities[i] === "Paris" || cities[i] === "paris"){
//         continue;
//     }
//     visitedcities.push(cities[i])
// }

// console.log(visitedcities);


// let numbers = [1,2,3,4,5]
// let smallnumbers = []

// for (const num of numbers) {
//     if(num === 4){
//         break
//     }
//     smallnumbers.push(num)
// }

// console.log(smallnumbers);

// let teatype= ["chai","green tea","herbal tea","black tea"];
// let preferredTeas = [];
// for (const tea of teatype) {
 
//     if(tea === "herbal tea"){
//         continue;
//     }
//     preferredTeas.push(tea)

  
// }
// console.log(preferredTeas);

let  citiesPopulation = {
    "London":8900000,
    "New York":240000,
    "Paris":7800000,
    "Berlin":980000,
}
let CityPopulations = {
      
}
//  console.log(Object.keys(citiesPopulation));
//  console.log(Object.values(citiesPopulation));


// for (const city in citiesPopulation) {
//     if (city === "Berlin"){
//         break;
//     }
//    CityPopulations[city] = citiesPopulation[city]
// }

// console.log(CityPopulations);

// let worldCities = {
//     "Sydney":5000000,
//     "Tokyo":9000000,
//     "Berlin":3500000,
//     "Paris":2200000
// }
// let largestCities = {};

// for (const city in worldCities) {
   
//     if (worldCities[city] < 3000000 ){ 
//         continue
//     };
    
//     largestCities[city] = worldCities[city];
    
    
// }

// console.log(largestCities);


let teacollection = ["earl grey","green tea","chai","oolang tea"]

let availableTeas = []
teacollection.forEach(function (tea){
    if(tea === "chai"){
        return;
    }
    availableTeas.push(tea);

});

//console.log(availableTeas);

let worldCities = ["Berlin","Tokyo","Sydney","Paris"]

let travelCities = []
worldCities.forEach((city)=> {
    if(city === "Sydney"){
        return;
    }
    travelCities.push(city)
    
});

//console.log(travelCities);

let num = [2,5,7,9]
let doubleNumbers = []

for (let i = 0; i < num.length; i++) {
    if(num[i] === 7){
        continue
    }
    doubleNumbers.push(num[i]*2)

}

//console.log(doubleNumbers);
let teatype = ["chai","green tea","black tea","jasmine tea","herbal tea"]

let shortTeas = []
for (const tea of teatype) {
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea)

}

console.log(shortTeas);




 


