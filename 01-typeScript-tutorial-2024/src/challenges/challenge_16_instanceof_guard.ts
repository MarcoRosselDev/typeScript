/*The instanceof type guard is a way in TypeScript to check the specific class or constructor function of an object at runtime. It returns true if the object is an instance of the class or created by the constructor function, and false otherwise.*/

try {
  // Some code that may throw an error
  throw new Error('This is an error');
} catch (error) {
  if (error instanceof Error) {
    console.log('Caught an Error object: ' + error.message);
  } else {
    console.log('Caught an unknown error');
  }
}

/*Start by defining the function using the function keyword followed by the function name, in this case checkInput.
Define the function's parameter. The function takes one parameter, input, which can be of type Date or string. This is denoted by input: Date | string.
Inside the function, use an if statement to check if the input is an instance of Date. This is done using the instanceof operator.
If the input is an instance of Date, return the year part of the date as a string. This is done by calling the getFullYear method on the input and then converting it to a string using the toString method.
If the input is not an instance of Date (which means it must be a string), return the input as it is.
After defining the function, you can use it by calling it with either a Date or a string as the argument. The function will return the year part of the date if a Date is passed, or the original string if a string is passed.
You can store the return value of the function in a variable and then log it to the console to see the result.*/

function checkInput(input: Date | string) {
  return input instanceof Data? input.getFullYear().toString() : input
}

let date = checkInput(new Date)
let str = checkInput('buen dia')
console.log(date);
console.log(str);

