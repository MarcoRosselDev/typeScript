interface Person{
  name: string,
  age: number
}

interface Person{
  country: string
}

const lushito: Person = {
  age: 20,
  country: 'chile',
  name: 'lushito'
}

// extends

interface Empleado extends Person{
  getDetails(): string
}

const pedro: Empleado = {
  age: 35,
  country: 'chile',
  name:'Pedro',
  getDetails(){
    return `el nomber de este empleado es ${this.name}`
  }
}

console.log(pedro.getDetails());

interface Dog{
  raza: string
}

// Interface multiple exptends
interface Personas extends Empleado, Dog{
  intereses(): void
}

const jesus:Personas = {
  age: 30,
  name: 'jesus',
  country: 'jerusalen',
  getDetails(){
    return `${this.name} es de ${this.country}`
  },
  raza: 'Dios',
  intereses() {
    console.log(`${this.name} es un ${this.raza}`);
  },
}

console.log(jesus.getDetails()); // log de lo que retorna el metodo
jesus.intereses() // ejecuta una accion