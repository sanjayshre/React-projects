import React, { useEffect, useState, useRef } from 'react'

function Ref2() {
    const [name, setName] = useState('')
    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name
    }, [name])


  return (
    <div>
        <input value={name} onChange={e => setName(e.target.value)} />
        <div>My name is {name} and it used to b {prevName.current}</div>
    </div>
  )
}

export default Ref2

// useRef is used to store the previous value between renders