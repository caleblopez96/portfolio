// import { useEffect } from 'react'
// import './App.css'
// import HomePage from './pages/Homepage.jsx'


// function App() {
//   useEffect(() => {
//     document.title = "Caleb's Portfolio"
//   })

//   return (
//     <>
//       <HomePage />
//     </>
//   )
// }

// export default App

import { useEffect } from 'react'
import '../css/App.css'
import HomePage from './pages/Homepage.jsx'
import { ThemeProvider } from './ThemeContext'

function App() {
  useEffect(() => {
    document.title = "Caleb's Portfolio"
  })

  return (
    <ThemeProvider>
      <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen">
        <HomePage />
      </div>
    </ThemeProvider>
  )
}

export default App