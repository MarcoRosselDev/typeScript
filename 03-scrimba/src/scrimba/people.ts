import { Person } from "./types"

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
