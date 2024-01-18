// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
greet("Brendan");

// si ejecutamos tsc .\test.ts
// creara el archivo test.js compilado, pero en la consola mostrara un error msj
// typescript nos adelanta informacion de errores en el codigo


// tsc --noEmitOnError hello.ts
// para no emitir los errores en el compilador