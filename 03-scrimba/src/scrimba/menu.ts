export type Pizza  = {
  name: string
  price: number
  id: number
}

export type PizzaOrder = {
  name: string
  status: "ordered" | "preparation" |"sended"
}

export let menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8},
  { id: 2, name: "Pepperoni", price: 10},
  { id: 3, name: "Hawaiian", price: 10},
  { id: 4, name: "Veggie", price: 9},
]