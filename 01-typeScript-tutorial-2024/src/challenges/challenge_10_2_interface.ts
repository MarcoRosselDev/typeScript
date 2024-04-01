/*
Challenge - Part 2
A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean, but also asserts that the argument is of a specific type if the function returns true. It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope. The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.

Define the isManager function Define a function called isManager that takes an object of type Person | DogOwner | Manager and returns a boolean. This function should check if the managePeople method exists on the object, and return true if it does and false if it doesn't. The return type of this function should be a type predicate: obj is Manager.
Run your code to see if it works as expected. If employee is a Manager, you should see the output of the delegateTasks method in the console. If employee is a Person or DogOwner, there should be no output.
*/

import { Manager_10, Person_10, DogOwner_10, juan_10, marco_10, pedro_10 } from "./challenge_10_1_interface";

function isManager(obj:Person_10 | DogOwner_10 | Manager_10):obj is Manager_10 {
  //console.log(obj);
  return  'managePeople' in obj? true: false
}

let empleados = [juan_10, marco_10, pedro_10]

for(let person of empleados){
  if (isManager(person)) {
    console.log(`${person.name} es un empleador`);
    person.delegateTasks()
  } else {
    continue
  }
}
