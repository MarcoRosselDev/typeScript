import { menu, PizzaOrder } from "./menu"
/* 2
* Write another utility function, placeOrder, that take a pizza name parameter and:
* 1. finds that pizza object in the menu,
* 2. adds the income to the cashInRegister,
* 3. pushes a new "order object" to the orderQueue
*    (e.g. {pizza: selecterdPizzaObjectFromStep1, status: "ordered"})
* 4. return the new order object (just in case we need it  later)
*/
let cashInRegister = 100
const orderQueue: PizzaOrder[] = []

function placeOrder(params:string): void | PizzaOrder  {
  const pizzaSelecterd = menu.find(objPizza => objPizza.name === params)
  if (!pizzaSelecterd) {
    return
  }
  let queue: PizzaOrder = {   name: pizzaSelecterd.name,  status: "ordered"   }
  cashInRegister += pizzaSelecterd.price
  orderQueue.push(queue)
  return queue
}

console.log(placeOrder("Margherita"));
//placeOrder("Margherita")
console.log(cashInRegister);
console.log(orderQueue);