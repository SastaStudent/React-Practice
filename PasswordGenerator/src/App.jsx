import { useEffect, useRef, useState } from 'react'
 
 

function App() {
  const [length,setLength]=useState(8)
  const [password,setPassword]=useState("")
  const [isNum,setIsNum]=useState(false)
  const [isChar,setIsChar]=useState(false)
  //useRef hook for highlighting some area
  const passwordref=useRef(null)

 const passGenerator = ()=>{
  // passwordref.current?.select()
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(isNum) str+="0123456789"
  if(isChar) str+="~!@#$%^&*()_+-"
  let pass="";
  for(let i=1;i<=length;i++)
  {
    let index= Math.floor(Math.random() *str.length );
    pass+=str[index];

  }
  setPassword(pass)
 }

 useEffect(()=>{
  passGenerator()
 },[length,isNum,isChar])
  
  return (
    <div className='bg-slate-700 flex flex-col w-full h-screen'>
    <div className='text-center relative top-3 text-white font-bold text-2xl'>Password Generator</div>
    <div className='flex flex-col mt-6 justify-center items-center'>
      <div className='text-white flex flex-col w-[90%] '>
        <div className='flex justify-center items-center w-full h-16'>
          <div className='w-[75%] overflow-hidden h-14'>
            <input id='Pass' className='p-3 outline-none h-full w-[100%] bg-white text-black rounded-lg'
              value={password}
              readOnly
              type='text'
              
              ref={passwordref}
            />
          </div>
          <div className='flex cursor-pointer justify-center items-center bg-blue-500 w-[18%] h-14 rounded-lg'
          onClick={()=>{
            // alert("Jai ho")
              passwordref.current?.select()
              navigator.clipboard.writeText(password)
          }}
          >Copy</div>
        </div>
        <div className='flex w-full justify-center items-center gap-4 flex-wrap'>
          <div>
            <input type="range"
            min={8}
            max={100}
            // value={8}
            onChange={(e)=> setLength(e.target.value)} />
            length({length})</div>
          <div>
            <input  type="checkbox"
            checked={isNum}
            onChange={() => setIsNum(!isNum)}
            /> Numbers
          </div>
          <div>
            <input type="checkbox"
            checked={isChar}
            onChange={()=>setIsChar(!isChar)}
            /> Special Characters
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default App
