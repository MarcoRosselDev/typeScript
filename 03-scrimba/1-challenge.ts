const menu = [
  { name: "Margherita", price: 8},
  { name: "Pepperoni", price: 10},
  { name: "Hawaiian", price: 10},
  { name: "Veggie", price: 9},
]

let cashInRegister = 100
const orderQueue = []

/*
* Challenge: Add a utility function "addNewPizza" that take a pizza object
* and add it to the menu. 
*/

function addNewPizza(pizza:{name:string,price:number}):void {
  menu.push(pizza)
}

/* 2
* Write another utility function, placeOrder, that take a pizza name parameter and:
* 1. finds that pizza object in the menu,
* 2. adds the income to the cashInRegister,
* 3. pushes a new "order object" to the orderQueue
*    (e.g. {pizza: selecterdPizzaObjectFromStep1, status: "ordered"})
* 4. return the new order object (just in case we need it  later)
*/

function placeOrder(params:string): {pizza:string, status: string} | undefined {
  const price = menu.map(e => e.name === params? e.price : null)
  console.log(price);  
  return
}

placeOrder("Margherita")
//output expected: orderQueue = [{pizza:"Margherita", status: "ordered"}]
// cashInRegister = 108