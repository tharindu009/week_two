import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../src/styles/globals/typography.css"
import LandingPage from './pages/LandingPage'
import "../src/styles/styles.css"

function App() {


  return (
    <div>
      <LandingPage />
    </div>
  )
}

export default App
