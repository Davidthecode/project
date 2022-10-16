import React from 'react'
import LoadingSpinner from './loadingSpinner'
import './spinner.css'
import {useEffect, useState} from 'react'

function Home() {
  const [loading, setLoading] = useState(true)
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
    <div>
      <h1>Home</h1>
    </div>
  )
}
}

export default Home