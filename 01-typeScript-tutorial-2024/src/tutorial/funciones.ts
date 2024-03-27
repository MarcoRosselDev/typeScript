function saludar(texto:string):string {
  console.log(texto);
  return `Hola ${texto}, buen dia`
}

console.log(saludar('hola'));
//console.log(saludar(20)); // error msj: Argument of type 'number' is not assignable to parameter of type 'string'




//que pasa si un parametro es opcional y lo utlizamos o no en la logica de una funcion?
function precio_final(precio:number, descuento?:number):number {
  return precio - (descuento || 0) // la solucion es encerrarlo en () y aplicar el || operador or
  // de esta forma si no se incluye el descuento se multiplica por 0 como valor por defecto
}

console.log(precio_final(100, 20));
console.log(precio_final(100));
