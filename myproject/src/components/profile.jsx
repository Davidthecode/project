import React from 'react'
import { useState } from 'react'

function Profile() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [storeInfo, setStoreInfo] = useState({})

  const handleForm = (e) => {
    e.preventDefault()
    setStoreInfo({
      cName: name,
      cAddress: address
    })
    setName('')
    setAddress('')
  }

  // console.log(storeInfo)

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleForm}>
        <div>
          <p>name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>address</p>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button action='submit'>submit</button>
      </form>
    </div>
  )
}

export default Profile