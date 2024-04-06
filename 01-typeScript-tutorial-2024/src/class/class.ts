class Book{
  
  //private readonly nombre:string
  //private autor:string
  private someBoolean: boolean = false // valor por defecto

  constructor(readonly nombre:string, public autor:string, private num: number){
    this.nombre = nombre
    this.autor = autor
  }
  private checkOut () {
    console.log(this.nombre, this.autor);
  }
  private seeNumber() {
    console.log(this.num);
  }
}

const marco = new Book('class with typescript', 'marco rossel', 30)

console.log(marco);

//marco.seeNumber()// aun que ts lo marca rojo igual se ve en el navegador