import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import OwnerHome from './components/Owner/OwnerHome'
import AddPg from './components/Owner/OwnerAddPG'
import ViewPgDetails from './components/Owner/OwnerViewPGDetails'
import OwnerLogin from './components/Owner/OwnerLogin'
import OwnerSignUp from './components/Owner/OwnerSignUp'
import OwnerProfile from './components/Owner/OwnerProfile'
import UserLogin from './components/User/UserLogin'
import UserSignUp from './components/User/UserSignup'
import AddRoomOwner from './components/Owner/OwnerAddNewRoom'
import OwnerPGBookingDetails from './components/Owner/OwnerPGBookingDetails'
import UserHome from './components/User/UserHome'
import UserProfile from './components/User/UserViewProfile'
import UserFindPgByCity from './components/User/UserFindPgByCity'
import UserPgList from './components/User/UserPgList'

function App()
{
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter(
    [
      {
        path : "/Home",
        element : <><Home/></>
      },
      {
        path : "/OwnerHome",
        element : <><OwnerHome/></>
      },
      {
        path : "/Owner/ViewPgDetails",
        element : <><ViewPgDetails/></>
      },
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
        path  : "/AddRoomOwner",
        element : <><AddRoomOwner/></>
      },
      {
        path  : "/OwnerProfile",
        element : <><OwnerProfile/></>
      },
      {
        path  : "/OwnerPGBookingDetails",
        element : <><OwnerPGBookingDetails/></>
      },
      {
        path : "/UserLogin",
        element : <><UserLogin/></>
      },
      {
        path : "/UserSignUp",
        element : <><UserSignUp/></>
      },
      {
        path : "/UserHome",
        element : <><UserHome/></>
      },
      {
        path : "/UserViewProfile",
        element : <><UserProfile/></>
      },
      {
        path : "/UserFindPgByCity",
        element : <><UserFindPgByCity/></>
      },
      {
        path : "/UserPgList",
        element : <><UserPgList/></>
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
