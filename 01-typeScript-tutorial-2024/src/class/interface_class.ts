// manera de implementar interface en classes

interface IPerson {
  name:string
  age:number
  greet(): void
}

class Person implements IPerson {
  constructor(public name:string, public age:number) {}
  greet(): void {
    console.log(`Hola, mi nombre es ${this.name} y mi edad es ${this.age}`);
  }
}

const hipster = new Person('marco', 30)
hipster.greet()