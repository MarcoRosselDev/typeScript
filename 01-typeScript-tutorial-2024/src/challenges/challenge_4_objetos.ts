/* 
Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.
Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.
Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.
*/

let bike:{brand:string; year:number} = {
  brand:'nike',
  year: 2023
}
//bike.year = '2001' //Type 'string' is not assignable to type 'number'.
let laptop:{brand: string; year?:number} = {
  brand: 'asus',
}
laptop.year = 2001
// el signo ? despues de la clave signfica que es un valor que puede no ser requerido

let products:{readonly title: string, price?: number}[] = [
  {title:'laptop'},
  {title: 'book',
  price: 1200
  }
]

// readonly no permite que se realicen cambios en el objeto, solo lectura
products[0].price = 3000
// products[0].title = 'laptooop' // Cannot assign to 'title' because it is a read-only property.
console.log(products);
