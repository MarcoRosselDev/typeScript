//import { useState } from 'react'
import './App.css'
//import {UseState} from './components/usestate'
import {Challenge_01} from './components/challenge_01'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseState nombre='Francisca' /> */}
      <Challenge_01 nombre='Francisca' email='francisca@gmail.com'/>
      <Challenge_01 nombre='Marco' />
    </>
  )
}

export default App
