type Guarding = string | number | boolean

let value:Guarding

let random = Math.random()

value = random < 0.33? 'Hola': random < 0.66? 200: true

console.log(value);