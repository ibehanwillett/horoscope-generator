import { useState } from 'react'
import randomScope from './componets/randomScope'
import './App.css'

function FortuneButton() {
  const [fortune, setFortune] = useState(randomScope)
  return (
    <div>
      <p>{randomScope()}</p>
      <button onClick={()=>
      setFortune(randomScope())}>random fortune</button>
    </div>
  )
}

function App() {

  return (
    <>
    <div>
      <h1>Horoscope Beercan-Millett</h1>
      <p>horoscopes collected as part of a failed marketing ploy for dog food</p>
    </div>
    { FortuneButton() }
    </>
  )
}

export default App