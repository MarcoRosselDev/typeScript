/* 
Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
*/

let temperatures:number[] = [1, 2, 4]
// temperatures.push('klsdf') // message: Argument of type 'string' is not assignable to parameter of type 'number'.
let colors: string[] = ['red', 'pink']
// colors.push(true)//message: Argument of type 'boolean' is not assignable to parameter of type 'string'.
let mixedArray: (number | string)[] = [12, 'marco', 958]
// mixedArray.push(true) // message: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.