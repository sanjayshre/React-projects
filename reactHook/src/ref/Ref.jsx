import React, { useEffect, useRef, useState } from 'react'

function Ref() {
    const [name, setName] = useState('')
    const renderCount = useRef(1)

    // every the we render increase
    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

  return (
    <div>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <div>My name is {name}</div>
        <div>I rendered {renderCount.current} times</div>
    </div>
  )
}

export default Ref

// useRef is used to presist betweem renders of ur component , Ref does'nt cause ur component to re-update when it gets changed

// rendercount is an object with current property 