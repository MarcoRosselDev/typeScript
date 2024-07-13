const menu = [
  { name: "Margherita", price: 8},
  { name: "Pepperoni", price: 10},
  { name: "Hawaiian", price: 10},
  { name: "Veggie", price: 9},
]

let cashInRegister = 100
const orderQueue = []

function test(pizza_name) {
  let price_pizza = 0
  let order = {}
  menu.forEach(obj => {
    if (obj.name === pizza_name) {
      price_pizza+= obj.price
      order.pizza = pizza_name
      order.status = "ordered"
    }
  })
  cashInRegister += price_pizza
  orderQueue.push(order)
}

test("Margherita")

console.log(orderQueue);
console.log(cashInRegister);