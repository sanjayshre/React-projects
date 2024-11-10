import { useCallback, useEffect, useState , useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState('')

  // useref hook
  const passwordRef = useRef(null)

  const passwordGenarator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  },[length,numberAllowed,charAllowed]) 
  // dependencies are states variables as it changes re-render it  

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // passwordRef is used to add effect on select the text and over the button  
  useEffect(() =>{
    passwordGenarator()
  },[length,numberAllowed,charAllowed,passwordGenarator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800'>
        <h1 className=' text-center text-white my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4' >
            <input type="text" value={password} className='outline-none w-full py-1 px-3'placeholder='Password' readOnly ref={passwordRef}/>
            <button onClick={copyPasswordToClipboard} className='px-2 bg-blue-600 text-white'>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setlength(e.target.value)}} />
              <label className='text-white'>length: {length}</label>
            </div>
          </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {numberAllowed} id='numberInput' onChange={() => {
            setnumberAllowed((prev) => !prev);
          }} />
          <label htmlFor="numberInput" className='text-white'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked = {charAllowed} id='charInput' onChange={() => {
            setcharAllowed((prev) => !prev);  
          }} />
          <label htmlFor="charInput" className='text-white'>character</label>
        </div>
      </div>
    </>
  )
}

export default App


// setcharAllowed((prev) => !prev); -> this is a callback method it stores the previous value then chances it