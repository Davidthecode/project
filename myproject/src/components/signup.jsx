import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSignupLs = (username, email, password) => {
    console.log(username)
    console.log(email)
    console.log(password)
    const obj = {
      username: username,
      email, email,
      password: password
    }

    localStorage.setItem("signup", JSON.stringify(obj))
    navigate('/home', { replace: true })
  }

  const handleSignup = (e) => {
    e.preventDefault()
    handleSignupLs(username, email, password)
  }
  return (
    <div>
      <div className='signupDiv'>
        <form className='signupForm' onSubmit={handleSignup}>
          <div>
            <input
              type="text"
              placeholder='input username...'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder='input email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder='input password...'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button action="submit">signup</button>
          </div>
          <div>
            <span>Already signed up?
              <Link to='/login'>login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup