//import { menu } from "./menu.js"
import {menu} from "./menu"
console.log(menu);

/*
* Challenge: Add a utility function "addNewPizza" that take a pizza object
* and add it to the menu. 
*/

export function addNewPizza(pizza:{name:string,price:number}):void {
  menu.push(pizza)
}

addNewPizza({name:"Napolitana", price: 10})