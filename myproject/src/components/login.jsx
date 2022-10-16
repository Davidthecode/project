import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import{Link} from 'react-router-dom'
import{useEffect} from 'react'
import LoadingSpinner from './loadingSpinner'
import './spinner.css'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)

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

const handleSpinner = <LoadingSpinner />
  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };
      
    loadData();
  }, [])
    
  // If page is in loading state, display 
  // loading message. Modify it as per your 
  // requirement.
  if (loading) {
      return handleSpinner
  } else {
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
}

export default Login