import { useState } from 'react'
import '../App.css'

function State() {
  const [count, setCount] = useState(4)

  function decrementCount () {
    setCount(prevCount => prevCount -1)
  }
  function incrementCount () {
    setCount(prevCount => prevCount +1)
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span> {count} </span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default State
// hooks are used in function only
// hooks can not run inside conditional operator

// This log only runs once 
// const [count, setCount] = useState(() => {
//   console.log('run func');
//   return 4
// }) 

// This log runs everytime we render 
// function countinitial(){
//   console.log('run func');
//   return 4
// }
// const [count, setCount] = useState(countinitial()) 

// const [state, setState] = useState({count: 4, theme: 'blue'})
// const count = state.count
// const theme = state.theme

// function decrementCount () {
//   setState(prevState => {
//     return {...prevState, count: prevState.count - 1}
//   })
// }

// multiple state does disturb each other