import React,{useContext, useState} from 'react'
import UserContext from '../context/UserContext'

// sending data to UserContext
function login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // this is usercontext provider , useContext helps in accessing userContext
    const {setUser} = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        // this setUser is used from above 
        setUser({username, password}) 
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default login