import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import LoadingSpinner from './loadingSpinner'
import './spinner.css'

function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)


  const handleSignupLs = (username, email, password) => {
    const obj = {
      UserUsername: username,
      UserEmail: email,
      UserPassword: password
    }

    localStorage.setItem("signup", JSON.stringify(obj))
    navigate('/home', { replace: true })
  }

  const handleSignup = (e) => {
    e.preventDefault()
    handleSignupLs(username, email, password)
  }

  const handleSpinner = <LoadingSpinner />
  useEffect(() => {
    const loadData = async () => {

      await new Promise((r) => setTimeout(r, 2000));

      setLoading((loading) => !loading);
    };

    loadData();
  }, [])

  if (loading) {
    return handleSpinner
  } else {
    return (
      <div>
        <div className='signupDiv'>
          <form className='signupForm' onSubmit={handleSignup}>
            <div className='field'>
              <input
                type="text"
                placeholder='input username...'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='field'>
              <input
                type="text"
                placeholder='input email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='field'>
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
}

export default Signup