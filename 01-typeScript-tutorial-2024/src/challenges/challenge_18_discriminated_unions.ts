/* Challenge - Discriminated Unions and exhaustive check using the never type
A discriminated union in TypeScript is a type that can be one of several different types, each identified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.

starter code */

type IncrementAction = {
  type: 'increment'
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: 'decrement'
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

/* Write a reducer function that takes the current state and an action, and returns the new state. The reducer function should use a switch statement or if-else chain on the type property of the action to handle each action type differently.

In the default case of the switch statement or the final else clause, perform an exhaustive check by assigning the action to a variable of type never. If there are any action types that haven't been handled, TypeScript will give a compile error.

Implement the logic for each action type in the reducer function. This typically involves returning a new state based on the current state and the properties of the action.

Use the reducer function in your application to handle actions and update the state. */

function reducer(num:number, action:Action) {
  switch (action.type) {
    case "decrement":
      return action.amount = action.amount - num
    case "increment":
      return action.amount = action.amount + num
    default:
      break;
  }
}

const test = reducer(2, {
  amount: 2,
  timestamp: 1234,
  type: "increment",
  user: 'marco'
})

console.log(test);
