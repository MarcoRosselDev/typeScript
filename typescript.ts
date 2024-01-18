interface User {
  name: string;
  id: number;
  //username: string;
}

const user:User = {
  name: "marco",
  id: 12,
  // username: 'lksjdf',
  // muestra error en vscoded si no declaro en la
  // interface el tipo de dato que sera
}