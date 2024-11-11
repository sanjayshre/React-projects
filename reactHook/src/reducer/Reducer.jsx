import React, { useReducer } from 'react'
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action){
    switch(action.type){
        case ACTIONS.INCREMENT:
            return {count: state.count + 1}
        case ACTIONS.DECREMENT:
            return {count: state.count - 1}
        default:
            return state    
    }
}
function Reducer() {
    // use {count: 0} instead of 0 beus when we are working with reducer we should use object . 
    const [state, dispatch] = useReducer(reducer, {count: 0})

    function decrement () {
        dispatch({type: ACTIONS.DECREMENT})
    }
    function increment () {
        dispatch({type: ACTIONS.INCREMENT})
    }
    return (
    <>
      <button onClick={decrement}>-</button>
      <span> {state.count} </span>
      <button onClick={increment}>+</button>
    </>
  )
}
export default Reducer

// useReducer(reducer, {count: 0})
// useReducer uses two argument [reducer] and [initial state]. reducer is func that we perform on our state to get new state 

// [state, dispatch] dispatch is called to update state , it calls reducer

// reducer(state, action)