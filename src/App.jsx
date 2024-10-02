import { useEffect } from 'react'
import './App.css'
import HomePage from './pages/Homepage.jsx'


function App() {
  useEffect(() => {
    document.title = "Caleb's Portfolio"
  })

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
