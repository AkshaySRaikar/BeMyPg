import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AddPg from './components/Owner/OwnerAddPG'
function App() {
  // const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    [
      {
        path : "/AddNewPgOwner",
        element : <><AddPg/></>
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
