enum Status_respuesta_servidor{
  Success = 200,
  Error = 'Error de la respuesta del servidor'
}

interface Respuesta_servidor{
  resultado: Status_respuesta_servidor
  data:string[]
}

function getServerResponse():Respuesta_servidor {
  return {
    resultado: Status_respuesta_servidor.Success,
    data: ['item 1', 'item 2...']
  }
}

console.log(getServerResponse());

enum ServerResponseStatus {
  Success = 'Success',
  Error = 'Error',
  num = 200,
  anothe_value = 301,
}

Object.values(ServerResponseStatus).forEach(value => console.log(value))

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === 'number') {
    console.log(value);
  }
});