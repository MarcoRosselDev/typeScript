/* 
Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:
If the input is of type number, the function should multiply the number by 2 and log the result to the console.
If the input is of type string, the function should convert the string to uppercase and log the result to the console.
*/

function processInput(params:string|number):void {
  /*  if (typeof params === 'string') {
    console.log(params.toUpperCase());
  } else{
    console.log(params * 2);
  } */
  typeof params === 'number'? console.log(params*2) :console.log(params.toUpperCase())
}

processInput(5)
processInput('marco')