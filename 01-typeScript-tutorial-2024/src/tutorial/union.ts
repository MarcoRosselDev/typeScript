function usion_type({id}:{id:number}): {id:number, isActive: boolean} {
  return {id: id, isActive: id%2 === 0}
}

console.log(usion_type({id:2}));
console.log(usion_type({id:3}));

function saludar_estudiante(student:{
  name:string,
  age:number
}): void {
  console.log(`Buenos dias ${student.name}, tu edad es ${student.age}`);
}

let student = {
  name:'marco',
  age: 30
}

saludar_estudiante(student)