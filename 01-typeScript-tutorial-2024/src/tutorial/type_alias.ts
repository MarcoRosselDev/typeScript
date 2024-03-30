const propName = 'nombre'
type Usuario = {id: number, [propName]: string}

const marco_1:Usuario = {
  id: 1,
  [propName]: 'marco'
}

console.log(marco_1);