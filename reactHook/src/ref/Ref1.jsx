import React, { useRef, useState } from 'react'

function Ref1() {
    const [name, setName] = useState('')
    const inputRef = useRef()

    function focus(){
        inputRef.current.focus()
    }

  return (
    <div>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <div>My name is {name}</div>
        <button onClick={focus}>Focus</button>
    </div>
  )
}

export default Ref1
// useRef is also used to refer the element and use dom element