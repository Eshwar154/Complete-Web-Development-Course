const person = {
    name:"Hitesh",
    greet(){
        console.log(`Hi, I am ${this.name}`);
        
    }
}

person.greet();

const greetFunction = person.greet
greetFunction()

const boundGreet = person.greet.bind({name:"John"});
boundGreet();

//bind , call and apply
const anotherperson = {name:"Alice"};  
person.greet.call(anotherperson)  //call attaches the function to anotherPerson temporarily, runs it, and then detaches it.

const guest = {name:"Sita"};
person.greet.apply(guest);
//If your greet() function took arguments—for example, greet(timeOfDay)—apply would require them in an array: person.greet.apply(guest, ["Morning"]). Since your function has no arguments, you just pass the object.

// In simple terms, the only difference is how you send extra information (arguments) to the function.

// Think of it like this:

// 1. call is for Commas
// You list your arguments one by one, separated by commas.

// func.call(context, arg1, arg2, arg3)

// 2. apply is for Arrays
// You put all your arguments into a single "package" (an array).

// func.apply(context, [arg1, arg2, arg3])

// A Real-World Analogy
// Imagine you are inviting friends to a party:

// call is like calling each friend individually on the phone. "I'm calling John, then I'm calling Sarah, then I'm calling Mike."

// apply is like sending one group text to a list of friends. The list is the array.