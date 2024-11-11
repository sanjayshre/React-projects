import React, { useCallback, useState } from 'react'
import List from './List'

function Callback() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback(() => {
        return [number, number+1, number+2]
    },[number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

  return (
    <div style={theme}>
        <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
        <button onClick={() => setDark(prevDark => ! prevDark)}>Toggle theme</button>
        <List getItems = {getItems} />
    </div>
  )
}

export default Callback

// useMemo takes the function and returns only the return value
// useCallback takes the funtion and returns the whole function , so it allows to use getItems as a function in list

//  const getItems = useCallback((increment) => {
//     return [number+increment, number+increment+1, number+increment+2]
// },[number]) 
// usecallback helps in passing the argument as it returns whole func 