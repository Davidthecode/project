import React from 'react'
import LoadingSpinner from './loadingSpinner'
import './spinner.css'
import { useEffect, useState } from 'react'

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
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home