import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Userlogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userdata, setUserData] = useState({})




    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({email:email, password:password})
        
        
        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex justify-center items-center h-screen w-screen rounded-md overflow-hidden'>
        <div className='p-7 h-[667px] w-[375px] border-2 border-black rounded-xl'>

            <div className='flex flex-col justify-between h-full ' >
               <div>
            <img className=' w-16 mb-10  ' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />

                <form onSubmit={submitHandler}>
                    <h3 className='text-xl font-semibold mb-2'>What's your Email?</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required  type="text" placeholder='email@example.com' />
                    <h3 className='text-xl font-semibold mb-2'>Enter password</h3>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type="password" placeholder='password' />
                    <button className='bg-[#111] rounded-md text-white w-full py-3 mt-2 ' type='submit'>Login</button>

                    <div className='flex justify-center items-center mt-2'>
                    <Link to={"/signup"} className=' self-center text-blue-500'>Don't have an account? Sign up</Link>

                    </div>

                   
                    
                </form>


                
               
               </div>

               

               <Link to={"/Captainlogin"} className=' flex items-center justify-center bg-[#10b461] rounded-md text-white w-full py-3 mt-2 ' type='submit'>Sign In as Captain</Link>

            </div>

           

            

        </div>
    </div>
  )
}

export default Userlogin