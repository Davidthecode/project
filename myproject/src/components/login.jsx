import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import{Link} from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginAuth =(email, password)=>{
    const getLocalStorageData = localStorage.getItem('signup')
    const parseData = JSON.parse(getLocalStorageData)
    if(email == parseData.email && password == parseData.password){
      navigate('/home', {replace:true})
    }else alert('requirements do not match, please signup')
  }

  const handleLogin =(e)=>{
    e.preventDefault()
    handleLoginAuth(email, password)
  }
  return (
    <div className='loginDiv'>
      <form className='loginForm' onSubmit={handleLogin}>
        <div>
          <input type="text"
            placeholder='input email...'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input type="text"
            placeholder='input password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button action='submit'>login</button>
        </div>
        <div>
            <span>Already signed up?
              <Link to='/login'>login</Link>
            </span>
          </div>
      </form>
    </div>
  )
}

export default Login