export type Pizza  = {
  name: string
  price: number
}

export type PizzaOrder = {
  name: string
  status: "ordered" | "preparation" |"sended"
}

export let menu: Pizza[] = [
  { name: "Margherita", price: 8},
  { name: "Pepperoni", price: 10},
  { name: "Hawaiian", price: 10},
  { name: "Veggie", price: 9},
]