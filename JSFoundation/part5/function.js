// function greet(name){   //name is parameter
//     //console.log(`Hello ${name}`);
    
// }

// greet("hitesh") //argument

// function makeTea(typeofTea){
//     return `Making ${typeofTea}`;

// }

// let teaOrder= makeTea("lemon Tea");

// function orderTea(teatype){
//     function confirmorder(){
//       return `Order is Confirmed for chai`
//     }

    
//      return confirmorder();
    

// }

// //console.log(orderTea("chai"));


// //function greet (){}
// const greet = () =>{} //arrow function

// const calculateTotal =(price,quantity)=>  price * quantity; //implict return



// let totalcost = calculateTotal(10,2)

// //Higher order function 
// function makeTea(typeofTea){
//     return `Make tea:${typeofTea}`
// }

// function processTeaOrder(teafunction){
//    return  teafunction("earl grey")
// }

// order = processTeaOrder(makeTea)
// console.log(order);

function createTeaMaker(name){
     let score =10;
     console.log(teatype);
    return function (teatype){
     return `Making ${teatype} ${name} ${score}`;
    }
}

let teaMaker = createTeaMaker("hitesh");  // return the function def or function  hence we are calling that function below
//console.log(teaMaker("chai"));
let result = teaMaker("green tea")
console.log(result);
