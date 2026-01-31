let car={
    make:"Toyota",
    model:"Camry",
    year:2020,
   start:function (){
      return  `${this.make} car got started in ${this.year}`
   },
};

console.log(car.start());
//constructor function :function should have capital letter
function Person(name,age){
    this.name = name
    this.age = age
}

// let john = new Person("John Doe",20)
// console.log(john.name);

//Prototype and prototypal chain

function Animal(type){
    this.type = type
}


//prototypal chain
Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.hitesh = function(){
    return  `Custom method ${this}`
}

let myArray = [1,2,3]
console.log(myArray.hitesh());
let myNewArray = [1,2,3,7,9]
console.log(myNewArray.hitesh());

class Vehicle {
       constructor(make, model){
         this.make = make
         this.model = model
       }

       start(){
        return `${this.model} is car from ${this.make} `;
       }
}

// class Car extends Vehicle{
//      drive(){
//         return `${this.make}: This is an inheritance example`;
//      }
// }

// let myCar = new Car("Toyota","Corolla")
// // console.log(myCar.start());
// // console.log(myCar.drive());

// let vehOne = new Vehicle("Toyota","Corolla")
// console.log(vehOne.make);

//Encapsulation 
//To  restrict the direct access of the object data
class BankAccount{
     #balance = 0;

     deposit(amount){
        this.#balance += amount;
        return this.#balance;
     }

     getBalance(){
        return `$ ${this.#balance}`;
     }

}

let account = new BankAccount()
//console.log(account.getBalance());

///Abstraction

class CoffeMachine{
    start(){
        // call DB
        //filter value
        return `Starting the machine..`
    }

    brewCoffee(){
        //complex calculation
        return `Brewing coffee`
    }

    pressStartButton(){
        let msgone = this.start()
        let msgTwo = this.brewCoffee()
        return `${msgone} + ${msgTwo}`
    }

}

 let myMachine = new  CoffeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism 

class Bird{
    fly(){
        return `Flying .......`
    }
}

class Penguin extends Bird{
    fly(){
          return `Penguins Can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()

// console.log(bird.fly());
// console.log(penguin.fly());


//Static method  the method that is only be called by class itself

class Calculator{
    static add(a,b){
        return a+b;
    }
}

let minicalc = new Calculator();
//console.log(minicalc.add(2,3));
//console.log(Calculator.add(3,8));

//Getters and Setters 

class Employee{

    #salary;
    constructor(name,salary){
        if(salary <0){
            throw new Error("Salary cannot be in negative")
        }
        this.name = name
        this.#salary =salary
    }

    get salary(){
        return  `You are not allowed to see salary`;
    }

    set salary(value){
        if(value< 0){
            console.error("Invalid Salary")
        }else{
            this._salary = value;
        }

    }
}

let emp = new Employee("Alice",50000)
console.log(emp._salary);
emp.salary = 60000;
