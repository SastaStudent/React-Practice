import { useState } from 'react'
 
import './App.css'

function App() {
   const [count,setCount]=useState(0)
   const Adder = ()=>{
    if(count===20) return
    setCount(count+1)
   }
   const Sub = ()=>{
    if(count==0) return
    setCount(count-1)
   }

  return (
    <>
    <div>
      Counter:
    </div>
    <div className='flex gap-1 mt-2'>
      <div className='flex justify-center items-center w-12 h-8 bg-black select-none ' onClick={Adder}>+</div>
      <div className='flex justify-center items-center w-32 h-8 bg-white text-black text-2xl font-sans'>{count}</div>
      <div className='flex justify-center items-center w-12 h-8 bg-black select-none' onClick={Sub}>-</div>
    </div>
    </>
       
  )
}

export default App
