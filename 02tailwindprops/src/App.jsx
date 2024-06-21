import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  
  const myObj = {
    username: "Vikrant",
    age:21
 }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>VIKRANT</h1>
      <Card username="Vikrant" />
      <Card username="Gharat" />
    </>
  )
}

export default App
