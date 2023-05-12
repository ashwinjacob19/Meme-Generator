import { useState } from 'react'
import React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header.jsx"
import Meme from "./Meme.jsx"

function App() {
  return (
    <div className='container'>
      <Header />
      <Meme />
    </div>
  )
}

export default App
