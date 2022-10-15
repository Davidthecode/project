import React, { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import LoadingSpinner from './components/loadingSpinner'

function App() {
  const [loading, setLoading] = useState(false)
  const handleEvent = ()=>{
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000)
    
  }
  return (
    <div>
      <div disabled={loading}>
        <span>click here to login</span>
        <Link to='/login' onClick={handleEvent}>login</Link>
      </div>
      <div disabled={loading}>
        <span>click here to signup</span>
        <Link to='/signup'>signup</Link>
      </div>
      <LoadingSpinner />
    </div>
  )
}

export default App