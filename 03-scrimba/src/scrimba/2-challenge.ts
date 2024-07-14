import { menu } from "./menu"

/* 2
* Write another utility function, placeOrder, that take a pizza name parameter and:
* 1. finds that pizza object in the menu,
* 2. adds the income to the cashInRegister,
* 3. pushes a new "order object" to the orderQueue
*    (e.g. {pizza: selecterdPizzaObjectFromStep1, status: "ordered"})
* 4. return the new order object (just in case we need it  later)
*/
type orderPizza = {
  pizza?: string
  status?: "ordered" | "sended"
}

let cashInRegister:number = 100
const orderQueue: orderPizza[] = []

function placeOrder(params:string): orderPizza {
  let order: orderPizza = {}
  menu.forEach(obj => {
    if (params === obj.name) {
      cashInRegister += obj.price
      order.pizza = params
      order.status = "ordered"
    }
  })
  orderQueue.push(order)
  return order
}

placeOrder("Margherita")
console.log(cashInRegister);
console.log(orderQueue);

//output expected: orderQueue = [{pizza:"Margherita", status: "ordered"}]
// cashInRegister = 108