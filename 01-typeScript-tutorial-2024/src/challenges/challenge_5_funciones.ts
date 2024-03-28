/* 
Create a new array of names.
Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
Use this function to check if various names are in your array and log the results.
*/

let names:string[] =['marco', 'eva', 'juan']

function check_names(name:string): boolean {
  for(let item of names) {
    if (item === name) {
      return true
    }
  }
  return false
}

console.log(check_names('eduardo'));// false
console.log(check_names('marco'));// true

function n_parametros(mensaje:string, ...numeros: number[]):string {
  const doble = numeros.reduce((prev, current) => prev + current)
  return `${mensaje} : ${doble}`
}

let test = n_parametros('la cantidad es', 1, 4, 5, 1)
// output: la cantidad es : 11
