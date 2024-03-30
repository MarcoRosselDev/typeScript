/*
Challenge - Part 1
Define the Person interface Start by defining a Person interface with a name property of type string.
Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.
*/

// aplicaremos _10 a cada nomber de variable por el numbero de challenger devido a que estos nombres de variable marcan error por que existen en otros archivos .ts
interface Person_10 {
  name: string
}

interface DogOwner_10 extends Person_10 {
  dogName: string
}

interface Manager_10 extends Person_10{
  managePeple(): void,
  delegateTasks(): void
}

const marco_10: Person_10 = {
  name: 'marco',
}
const pedro_10: DogOwner_10 = {
  name: 'pedro',
  dogName: 'monkey',
}
const juan_10:Manager_10 = {
  name: 'juan',
  delegateTasks() {
    console.log(this.name);
  },
  managePeple() {
    console.log(this.name);
  },
}

function getEmployee(): Person_10 | DogOwner_10 | Manager_10 {
  let random_number: number = Math.random()
  return random_number < 0.33? marco_10 : random_number > 0.66? juan_10: pedro_10 
}

console.log(getEmployee());
console.log(getEmployee());
console.log(getEmployee());
console.log(getEmployee());
console.log(getEmployee());
console.log(getEmployee());
console.log(getEmployee());
console.log(getEmployee());
console.log(getEmployee());
console.log(getEmployee());
console.log(getEmployee());