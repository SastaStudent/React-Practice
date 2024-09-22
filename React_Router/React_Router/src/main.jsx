import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github,{gitloader} from './components/Github/Github.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import { gitloader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>

//       },
//       {
//         path:"about",
//         element:<About/>
//       }
//     ]
//   }
// ])

//2nd syntax

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={gitloader}
      path='github' 
      element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
