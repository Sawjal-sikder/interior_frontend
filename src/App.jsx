import React, { useEffect } from 'react'
import Home from './pages/home'

function App() {
  // for title set
  useEffect(() => {
    document.title = "Commitment Service";
  }, []);

  return (
    <>
      <Home />
    </>
  )
}

export default App
