/* function genericStringArray(length:number, value: string): string[] {
  let result:string[] = []
  result = Array(length).fill(value)
  return result
}

console.log(genericStringArray(5, 'marco')); */

function genericStringArray<T>(length:number, value: T): Array<T> { //  === T[]
  let result:T[] = []
  result = Array(length).fill(value)
  return result
}

console.log(genericStringArray(7, 'lushito'));
console.log(genericStringArray(7, 30));
console.log(genericStringArray(7, true));