import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
function App() {
  return (
    <div>
      <div>
        <span>click here to login</span>
        <Link to='/login'>login</Link>
      </div>
      <div>
        <span>click here to signup</span>
        <Link to='/signup'>signup</Link>
      </div>
    </div>
  )
}

export default App