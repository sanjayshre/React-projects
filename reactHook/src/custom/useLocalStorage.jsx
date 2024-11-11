import React, { useEffect, useState } from 'react'

function getSavedValue(key, initialValue){
    try {
        const savedValue = JSON.parse(localStorage.getItem(key))
        if(savedValue !== null) return savedValue
    } catch (error) {
        console.error('Error parsing localStorage value:', error)
    }
    if(typeof initialValue === 'function'){ 
        return initialValue()
    }
    return initialValue
}

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
  
    return [value, setValue]
}

export default useLocalStorage


// we are passing function in usestate beus passing savedValue is slow , so if we pass func it call only once