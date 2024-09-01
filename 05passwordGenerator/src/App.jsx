import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  //useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuiopadfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    if (numberAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "`~!@#$%^&*()-_=+[]{}<>?"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
    alert('Generated password copied to clipboard !');
  }, [password])


  //useEffect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}></input>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>
            <span>copy</span>
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => {
              setLength(e.target.value);
            }} />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
              setnumberAllowed((prev) => !prev);
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="charInput" onChange={() => {
              setCharAllowed((prev) => !prev);
            }} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
