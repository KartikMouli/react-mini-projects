import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {

  let myObj = {
    username: "kartik",
    age: 21
  }
  let Arr = [1, 2, 3, 4];
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind Test</h1>
      <Card channel="chaha aani code" btnText="click me"/>
      <Card channel="chaiaurcode"  btnText="visit me" />
    </>
  )
}

export default App