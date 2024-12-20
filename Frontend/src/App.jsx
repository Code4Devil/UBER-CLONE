import React, { useContext } from 'react'
import { UserDataContext } from './context/usercontext.jsx'
import { Route, Routes } from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Start from './pages/Start.jsx'
import Home from './pages/Home.jsx'
import UserProtectWrapper from './pages/UserProtectWrapper.jsx'
import UserLogout from './pages/UserLogout.jsx'
import CaptainHome from './pages/CaptainHome.jsx'


const App = () => {

  const user = useContext(UserDataContext);
  return (
    <div className='h-full w-full'>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path="/login" element={<Userlogin/>} />
        <Route path="/signup" element={<Usersignup />} />
        <Route path="/captainlogin" element={<Captainlogin />} />
        <Route path="/captainsignup" element={<Captainsignup />} />
        <Route path="/home" element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        } />

        <Route path="/user/logout" element={
          <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>
        }/>

        <Route path="/captainhome" element={
          <CaptainHome/>
        }/>

        
      </Routes>
    </div>
  )
}

export default App