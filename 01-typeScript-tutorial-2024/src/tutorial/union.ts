function usion_type({id}:{id:number}): {id:number, isActive: boolean} {
  return {id: id, isActive: id%2 === 0}
}

console.log(usion_type({id:2}));
console.log(usion_type({id:3}));
