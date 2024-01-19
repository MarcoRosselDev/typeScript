// number[] === array compuesto por elementos typo numero
// string[] === array compuesto por elementos typo string
// === Array<number>
// === Array<string> ===> syntax === T<U>


// Any
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

// Optional propertys === ?
// podemos espasificar si una propiedad es opcional
// sintax
function printName(obj: {first: string; last?: string}) {
  
}
// los siguientes dos estan ok
printName({first:"Bob"})
printName({first:"Bob", last: "Alisson"})

// return type annotations
// sintax
function getFavoriteNumber(params:number):number {
  return 123;
}