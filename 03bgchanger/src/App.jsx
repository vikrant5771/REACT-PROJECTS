import { useState } from 'react'
import './App.css'

function App() {
  
  const [color,setColor] = useState("olive")


  return (
      <div className='w-full h-screen duration-500' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-3xl px-3 py-2'>
          <button onClick={(e) => {
            setColor("red")
          }} className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          <button  onClick={(e) => {
            setColor("green")
          }} className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
          <button  onClick={(e) => {
            setColor("blue")
          }}className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
        </div>
       </div>
      </div>
  )
}

export default App
