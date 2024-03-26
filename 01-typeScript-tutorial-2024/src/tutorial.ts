/* ## Challenge

- Create a variable of type string and try to invoke a string method on it.
- Create a variable of type number and try to perform a mathematical operation on it.
- Create a variable of type boolean and try to perform a logical operation on it.
- Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
- You can use type annotation or inference */

let my_string = 'marco rossel'
my_string = my_string.toUpperCase()
console.log(my_string);

let my_number = 10
my_number = my_number * 10
console.log(my_number);

let my_boolean = true
if (my_boolean) {
  my_boolean = !my_boolean
}
console.log(my_boolean);
