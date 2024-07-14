import { menu } from "./menu"
/* 2
* Write another utility function, placeOrder, that take a pizza name parameter and:
* 1. finds that pizza object in the menu,
* 2. adds the income to the cashInRegister,
* 3. pushes a new "order object" to the orderQueue
*    (e.g. {pizza: selecterdPizzaObjectFromStep1, status: "ordered"})
* 4. return the new order object (just in case we need it  later)
*/
let cashInRegister = 100
const orderQueue: any[] = []

function placeOrder(params:string) {
  const pizzaSelecterd = menu.find(objPizza => objPizza.name === params)
  if (pizzaSelecterd) {
    cashInRegister += pizzaSelecterd.price
    orderQueue.push(pizzaSelecterd, "ordered")
  }
  return pizzaSelecterd
}

placeOrder("Margherita")
console.log(cashInRegister);
console.log(orderQueue);

//output expected: orderQueue = [{pizza:"Margherita", status: "ordered"}]
// cashInRegister = 108