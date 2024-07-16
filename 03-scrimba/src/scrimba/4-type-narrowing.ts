/* 
*   Challenge: create a new utility function called getPizzaDetail. It will take
*   a parameter called "identifier", but there´s a wrist: we want this identifier
*   to be allowed to aither be the string same of the pizza (e.g. "Pepperoni"),
*   OR to be the number ID of the pizza (e.g. 2).
* 
*   Don´t worry about the code inside the function yet, just create the function
*   signature, making sure to teach TS that the "ìdentifier" parameter is allowed
*   to ither be a string or a number.
**/
import { addNewPizza } from "./1-challenge.ts"
import { menu, Pizza } from "./menu.ts"

addNewPizza({name:"Napolitana", price: 10, id: 5})
addNewPizza({name:"champiñones", price: 8, id: 6})

function getPizzaDetail(identifier:string|number):Pizza | string {
  if (typeof identifier === "string") {
    const found = menu.find(obj => obj.name.toUpperCase() === identifier.toUpperCase());
    return found? found: `No se encontro la pizza con el nombre ${identifier}`;
  }
  const found_number = menu.find(obj => obj.id === identifier);
  return found_number? found_number: `No se encontro la pizza con el id ${identifier}`;
};

console.log(getPizzaDetail(6))
console.log(getPizzaDetail(7))
console.log(getPizzaDetail(1))
console.log(getPizzaDetail("napolitana"))
console.log(getPizzaDetail("marco"))