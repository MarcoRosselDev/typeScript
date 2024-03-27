let arr: string[] = ['1993', 'marco']

let comparador : string | undefined

for(let item of arr) {
  if (item === '1993') {
    comparador = item
    comparador.toUpperCase()
    break
  }
}

console.log(comparador?.length);
