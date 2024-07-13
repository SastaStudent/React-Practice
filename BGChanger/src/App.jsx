import { useState } from 'react'

 

function App() {
  const [color,setColor] = useState('#222222')

  return (
    <div className='  w-full h-screen'
    style={{backgroundColor:color}}>
      <div className='text-white gap-2 relative top-5 text-2xl flex justify-center items-center '>
        <div className='bg-slate-600 w-auto p-3 rounded-2xl text-red-600'
        onClick={()=> setColor('rgb(220,38,38)')}
        >Red</div>
        <div className='bg-slate-600 w-auto p-3 rounded-2xl text-green-500'
         onClick={()=> setColor('rgb(34,137,94)')}
        >Green</div>
        <div className='bg-slate-600 w-auto p-3 rounded-2xl text-blue-500'
        onClick={()=> setColor('rgb( 59,130,246)')}
        >Blue</div>
        <div className='bg-slate-600 w-auto p-3 rounded-2xl text-yellow-600'
        onClick={()=> setColor('rgb( 202,138,4)')}
        >Yellow</div>
        <div className='bg-slate-600 w-auto p-3 rounded-2xl text-black'
        onClick={()=> setColor('#212121')}
        >Black</div>
        <div className='bg-slate-600 w-auto p-3 rounded-2xl text-white'
        onClick={()=> setColor('#1111')}
        >White</div>
      </div>
      
    </div>
  )
}

export default App
