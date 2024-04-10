import '../style/usestate.css'
import { useState } from "react"

export function UseState(params:{nombre:string}): JSX.Element {
  
  type Lista = {
    nombre: string 
    edad?: number
  }

  const [count, setCount] = useState(0)
  const [list, setList] = useState<Lista[]>([])
  const [nota, setNota] = useState('')

  return (
    <div >
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <div>
        <input type="text" onChange={(e) => setNota(e.target.value)}/>
        <button onClick={() => setList(prev => [...prev, {
          nombre: nota
        }])}>guardar</button>
        <p>{nota}</p>
      </div>
      <p>{params.nombre}</p>
      <div>
        {list.map((item, index) => (<p key={index} >{item.nombre}</p>))}
      </div>
    </div>
  )
}