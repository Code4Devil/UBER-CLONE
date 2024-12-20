import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const Captainlogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captian, setCaptian] = useState({})
    const navigate = useNavigate();




    const submitHandler = async (e) => {
        e.preventDefault();
        const captian = ({email:email, password})

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captians/login`, captian);
        
        if(response.status === 200){
            const data = response.data;
            setCaptian(data);
            localStorage.setItem('token', data.token);
            navigate('/captainHome');
        }

        
        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex justify-center items-center h-screen w-screen rounded-md overflow-hidden'>
        <div className='p-7 h-[667px] w-[375px] border-2 border-black rounded-xl'>

            <div className='flex flex-col justify-between h-full ' >
               <div>
            <img className=' w-20 mb-10  ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

                <form onSubmit={submitHandler}>
                    <h3 className='text-xl font-semibold mb-2'>What's your Email?</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required  type="text" placeholder='email@example.com' />
                    <h3 className='text-xl font-semibold mb-2'>Enter password</h3>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="password" placeholder='password' />
                    <button className='bg-[#111] rounded-md text-white w-full py-3 mt-2 ' type='submit'>Login</button>

                    <div className='flex justify-center items-center mt-2'>
                    <p className='text-center'>Join a fleet? </p>  <Link to={"/Captainsignup"} className='text-center text-blue-500'>Register as a Captain</Link>
                    </div>

                    

                    
                </form>


                
               
               </div>

               

               <Link to={"/login"} className=' flex items-center justify-center bg-[#d5622d] rounded-md text-white w-full py-3 mt-2 ' type='submit'>Sign In as User</Link>

            </div>

           

            

        </div>
    </div>
  )
}

export default Captainlogin