import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainsignup = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [userdata, setUserData] = useState({})
    
    const submitHandler = (e) => {
        e.preventDefault();

        console.log(firstname, lastname, email, password);
        setUserData({
            fullname: {
                firstname:firstname,
                lastname:lastname,
            },
            email:email,
            password:password
        })


        console.log(userdata);

        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
    }







  return (
     <div className='flex justify-center items-center h-screen w-screen rounded-md overflow-hidden'>
        <div className='p-7 h-[667px] w-[375px] border-2 border-black rounded-xl'>

            <div className='flex flex-col justify-between h-full ' >
               <div>
            <img className=' w-20 mb-2 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

                <form onSubmit={submitHandler} >

                    <h3 className='text-base font-semibold mb-1'>What's our
                       Captain's name?</h3>
                    <div className='flex gap-5 mb-5'>
                        <input required value={firstname} onChange={(e) => setFirstname(e.target.value)} className='bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-sm'  type="text" placeholder='First Name' />
                        <input value={lastname} onChange={(e) => setLastname(e.target.value)} className='bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-sm' required  type="text" placeholder='Last Name' />
                    </div>


                    <h3 className='text-base font-semibold mb-1'>What's our Captain's Email?</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' required  type="text" placeholder='email@example.com' />
                    <h3 className='text-base font-semibold mb-1'>Enter password</h3>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' required type="password" placeholder='password' />
                    <button className='bg-[#111] rounded-md text-white w-full py-3' type='submit'>Login</button>

                    <div className='flex justify-center items-center mt-2'>
                    <p className='text-center'>Already have an account? </p>  <Link to={"/captainlogin"} className='text-center text-blue-500'>Login</Link>
                    </div>

                    

                    
                </form>


                
               
               </div>


                <div className='flex justify-center items-center text-center'> <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
                Policy</span> and <span className='underline'>Terms of Service apply</span>.</p></div>

               


            </div>

           

            

        </div>
    </div>
  )
}

export default Captainsignup