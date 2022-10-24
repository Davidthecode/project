import React from 'react'
import LoadingSpinner from './loadingSpinner'
import './spinner.css'
import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  const [loading, setLoading] = useState(true)
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
        <h1 className='home'>Home</h1>
        <div className='holdContent'>
          <div className='content1'>
            <p><Link to='profile'>profile</Link></p>
            <p><Link to='about'>about</Link></p>
            <p><Link to='edit'>edit</Link></p>
            <p><Link to='settings'>settings</Link></p>
          </div>
          <div className='content2'>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
}

export default Home