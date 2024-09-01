import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    if (counter < 20) {
      // setCounter(counter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);

    }


  }



  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={() => { if (counter > 0) setCounter(counter - 1) }}>Decrease Value</button>
    </>
  )
}

export default App
