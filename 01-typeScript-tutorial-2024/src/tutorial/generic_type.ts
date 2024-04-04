// Definir una funcion generica
function genericFunction<T>(arg:T): T {
  return arg
}
const someString = genericFunction<string>('marco')
const someNumber = genericFunction<number>(30)

console.log(someString, someNumber);

// Definir una interface generica
interface GenericInterface<T> {
  value: T,
  getValue: () => T
}

const genericString:GenericInterface<string> = {
  value: 'Hola mundo',
  getValue() {
    return this.value
  },
}
const genericNumber:GenericInterface<number> = {
  value: 30,
  getValue() {
    return this.value
  },
}

console.log(genericString.getValue(), genericNumber.getValue());