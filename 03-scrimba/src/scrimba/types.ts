export type Person = {
  name: string
  age: number
  addres?: {
    street: string
    city: string
    country: string
  }
}

export type User = {
  id: number
  username: string
  role: "member"|"contributor"|"admin"
}