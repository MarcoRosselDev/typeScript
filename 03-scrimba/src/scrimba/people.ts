import { Person, User } from "./types"

export const people: Person[] = [{
  age: 31,
  name: 'Marco',
},{
  age: 63,
  name: "Eva",
  addres: {
    city: 'San pedro de la paz',
    country: 'Chile',
    street: 'Nueva los copihues'
  }
}]

export const person: Array<Person> = [people[2] , {age: 31, name:""}]
// Array<Person> es igual a Person[]
// Por que existen estas dos sintaxis para espesificar un arreglo de typos Person?

export const users: User[] = [
  {id:1, username:"john_doe", role: "member"},
  {id:2, username:"jane_smith", role: "member"},
  {id:3, username:"alice_jones", role: "contributor"},
  {id:4, username:"charlie_brown", role: "admin"},
]