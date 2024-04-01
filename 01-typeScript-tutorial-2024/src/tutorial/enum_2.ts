enum Status_server {
  error = 400,
  success = 'Puede ser cualquier tipo de dato, number, string, boolean',
}

interface Respuesta_status {
  status: Status_server
  info: string[]
}

function respuesta_servidor():Respuesta_status {
  return {
    status: Status_server.error,
    info: ['item 1', 'item 2']
  }
}

console.log(respuesta_servidor());
