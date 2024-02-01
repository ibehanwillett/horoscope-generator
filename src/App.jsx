import { useState } from 'react'
import randomScope from './componets/randomScope'
import Accordion from './componets/Accordion'
import './App.css'

// function FortuneButton() {
//   const [fortune, setFortune] = useState(randomScope)
//   return (
//     <div>
//       <p>{randomScope()}</p>
//       <button onClick={()=>
//       setFortune(randomScope())}>random fortune</button>
//     </div>
//   )
// }


function App() {

  return (
    <>
    <div>
      <h1>Horoscope Beercan-Millett</h1>
      <p>horoscopes created as part of a failed marketing ploy for dog food</p>
    </div>
    <div>
    <Accordion />
    </div>
    </>
  )
}

export default App
