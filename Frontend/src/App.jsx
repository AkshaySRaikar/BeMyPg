import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AddPg from './components/Owner/OwnerAddPG'
import OwnerLogin from './components/Owner/OwnerLogin'
import OwnerSignUp from './components/Owner/OwnerSignUp'
import UserLogin from './components/User/UserLogin'
import UserSignUp from './components/User/UserSignup'

function App() 
{
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    [
      {
        path : "/AddNewPgOwner",
        element : <><AddPg/></>
      },
      {
        path : "/OwnerLogin",
        element : <><OwnerLogin/></>
      },
      {
        path : "/OwnerSignUp",
        element : <><OwnerSignUp/></>
      },
      {
        path : "/UserLogin",
        element : <><UserLogin/></>
      },
      {
        path : "/UserSignUp",
        element : <><UserSignUp/></>
      },
     
    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
