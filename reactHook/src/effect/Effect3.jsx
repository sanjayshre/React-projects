import React, { useEffect, useState } from 'react'

function Effect3() {
    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => {
        console.log('resource changed');
        
        return () => {
            console.log('return from resource changed');
        }
    }, [resourceType])

  return (
    <div>
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
    </div>
  )
}

export default Effect3

// return () => {} 
// is used to clean up , what ever is rendered before in useEffect it gets cleaned up
// its mostly used in api call when we conntect to server in useEffect after fetching data it gets unmounted