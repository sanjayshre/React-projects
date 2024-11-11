import React, { useEffect, useMemo, useState } from 'react'
import '../App.css'

function Memo() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const doubleNumber = useMemo(() => { 
        return slowFunction(number)
    }, [number])

    const themeStyles = useMemo(() => {
       return { 
        backgroundColor : dark ? 'black' :  'white',
        color : dark ? 'white' : 'black'
        }
    },[dark])

    useEffect(() => {
        console.log('Theme Changed');
    },[themeStyles])

  return (
    <div>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

function slowFunction(num){
    console.log('calling slow func');
    for (let i = 0; i <= 100000000; i++) {}
    return num * 2
}

export default Memo

// {} useMemo is used to memorize or cache data , useMemo only runs when its dependency changes so the rest code runs normal without any lagg

// {Referencial Equality} in javascript 2 object wont b equal beus they refer to diffrent location . 

// when we re-render ,it calls log 'theme changed' so when we use UseMemo it cache the Themechanged and calls only when it changes