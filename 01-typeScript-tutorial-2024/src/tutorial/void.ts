// cuando queremos que una funcion no retorne nada aplicamos void
function log(text:string): void {
  console.log(text);
  
  //return text //Type 'string' is not assignable to type 'void'
  // no se puede aplicar un retrun de nada, nos marca error
  // de esta manera la funcion solo ejecuta un algoritmo y no devuelve nada  
}