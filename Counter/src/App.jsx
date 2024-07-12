import { useState } from 'react'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function Adder(){
    if(count==20) return;
    setCount(count+1)
  }
  const sub = ()=>{
    if(count==0) return;
    setCount(count-1)
  }
  return (
    <>
     <h2>Counter</h2>
     <div className='Main'>
      <div className='AddSub' onClick={Adder}>+</div>
      <div className='textArea'>{count}</div>
      <div className='AddSub' onClick={sub}>-</div>
     </div>
      
    </>
  )
}

export default App
