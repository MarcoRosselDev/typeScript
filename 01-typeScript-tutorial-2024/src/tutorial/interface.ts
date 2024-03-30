interface Book_interface{
  readonly isbn: number,
  titulo: string,
  autor: string,
  genero?: string,
  logAuthor():string
}

const deepWork:Book_interface = {
  isbn: 1234,
  titulo: 'deepWork',
  autor: 'Lushito come papas',
  genero: 'autoayuda',
  logAuthor() {
    //console.log(this.autor);
    return this.titulo
  }
}

console.log(deepWork.logAuthor());
