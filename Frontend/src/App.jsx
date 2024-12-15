import React, { useContext } from 'react'
import { UserDataContext } from './context/usercontext.jsx'
import { Route, Routes } from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Homepage from './pages/Homepage'


const App = () => {

  const user = useContext(UserDataContext);
  return (
    <div className='h-full w-full'>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Userlogin/>} />
        <Route path="/signup" element={<Usersignup />} />
        <Route path="/captainlogin" element={<Captainlogin />} />
        <Route path="/captainsignup" element={<Captainsignup />} />
      </Routes>
    </div>
  )
}

export default App