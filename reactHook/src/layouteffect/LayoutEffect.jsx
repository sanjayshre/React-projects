import React, { useEffect, useLayoutEffect } from 'react'

function LayoutEffect() {
    useEffect(() => {
        console.log('Message from useEffect');
    },[])
    useLayoutEffect(() => {
        console.log('Message from useLayoutEffect');
    },[])
  return (
    <div>LayoutEffect</div>
  )
}

export default LayoutEffect

// useLayout works similarly to useEffect, but it is called before the user interface gets mounted
// useEffect gets called after printing the DOM element
// useLayoutEffect gets called before printing the DOM elements