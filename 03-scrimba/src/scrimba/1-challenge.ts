//import { menu } from "./menu.js"
import {menu, Pizza} from "./menu"
/*
* Challenge: Add a utility function "addNewPizza" that take a pizza object
* and add it to the menu. 
*/

export function addNewPizza(pizza:Pizza):void {
  menu.push(pizza)
}

addNewPizza({name:"Napolitana", price: 10})