// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Router, Routes } from 'react-router-dom'
import TeamMemberCard from './components.jsx/TeamMemberCard'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Route path="/" element={<TeamMemberCard />} />
      </Router>
    </>
  )
}

export default App
