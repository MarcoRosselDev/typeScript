// es la convinacion de typos, donde un type A le herada sus tipos a un type B:

type Book = {id: number, title:string}
type Book_discount = Book & {discount: number}

const book_1 : Book = {
  id: 1,
  title: 'Calculo 1 stewart'
}

const book_2 : Book_discount = {
  ...book_1,
  discount: 20
}
console.log(book_2);
