import React from 'react'
import { useState, useEffect } from 'react'


function Effect2() {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
    setwindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    },[])
    return (
        <div>{windowWidth}</div>
    )
}

export default Effect2