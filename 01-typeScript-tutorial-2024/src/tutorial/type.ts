const marco:{name:string, age: number} = {name: 'marco', age: 30}
const juan:{name:string, age:number} = {name: 'juan', age: 35}
// para evitar toda esta sintaxis podemos crear un type prototypo:

type User = {name:string, age:number}

const eva:User = {name: 'eva', age: 64}
// esto puede ser aplicado a retornos y variables
type Theme = 'light' | 'dark'

function setTheme(string:Theme): Theme {
  return string === 'light'? 'dark': 'light'
}