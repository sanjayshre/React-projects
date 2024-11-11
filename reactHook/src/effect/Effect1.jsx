import React, { useEffect, useState } from 'react'
import '../App.css'

function Effect() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  },[resourceType])
  
  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default Effect

// useEffect without dependency runs the code everytime we render

// but with use effect [resourceType] it renders only when resoucetype changes not when re-render

// This log every time we render 
// useEffect(() => {
// console.log('render')
// })
