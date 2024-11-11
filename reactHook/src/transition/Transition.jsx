import React, { useState, useTransition } from 'react'

function Transition() {
    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const LIST_SIZE = 20000

    function handleChanges(e) {
        setInput(e.target.value)
        startTransition(() => {
            const list = []
            for (let i = 0; i < LIST_SIZE; i++) {
                list.push(e.target.value)
            }
        setList(list)
        })
        
    }
  return (
    <div>
        <input type="text" value={input} onChange={handleChanges} />
        {isPending ? 'Loading...'
         : list.map((item, index) => {
            return <div key={index}>{item}</div>
        })}
    </div>
  )
}

export default Transition

// Transition say react that all the state inside the transition are low priority
// 