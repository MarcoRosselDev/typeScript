/* 
* Challenge:
* Fix the addNewPizza function using the Omit utility type. This might
* require more than just changing the "Pizza" typed "pizzaObj" parameter.
* Return the new pizza object (with the id added) from the function.
*/
import { Pizza } from "./menu"
import { menu } from "./menu"
let nexPizzaId = 5

function addNewPizza(pizzaObj:Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza =  {...pizzaObj, id: nexPizzaId++}
  menu.push(newPizza)
  return newPizza
}


addNewPizza({name: "chicken becon ranch", price: 12})
console.log(menu)