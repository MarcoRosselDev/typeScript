import '../style/challenge_01.css'

type Subscripcion = {nombre: string, email?: string}

export function Challenge_01({nombre, email}: Subscripcion) {
  
  const tipo = email? 'Advance': 'Basic'
  const component = tipo === 'Advance'? (<div className="blue"><p>{nombre}</p><p>{email}</p></div>): (<div className="red"><p>{nombre}</p></div>)

  return (
    <div>
      {component}
    </div>
  )
}