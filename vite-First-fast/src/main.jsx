import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Exploration one
function Monu()
{
  return (
    <h1>Hello MonuChauhan My Buddy</h1>
  )
}

//Exploration two
const element=(
  <a href="https://google.com/SastaStudent"> Click</a>
  
)

//Exploration three
const elementTwo=React.createElement(
  //tag->propreties->visible text
  'a',
  {
    href:'https://www.github.com/SastaStudent/',
    target:'_blank'
  },
  'Monu GitHub'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>//optional for strictMode
  //   <App />
  // </React.StrictMode>,

  // <>
  // <Monu/>
  // Monu()
  // </>
  // Monu() direct working but not working in multiple element

  // <>
  // {/* element */}

  // elementTwo
  // </> we can't give it fragments
  elementTwo
  
)
 