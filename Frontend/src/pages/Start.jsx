import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen rounded-md overflow-hidden'>

        <div className='h-[667px] w-[375px] border-2 border-black rounded-xl overflow-hidden'>
        <div className=' bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-full w-full pt-10  flex flex-col justify-between'>
            <img className='w-16 ml-7' src="https://imgs.search.brave.com/iUu_pSUB4XC14yY3lkGujRPUI3q11j4kizg-ipgasO8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY1OTc2ODc3/OXViZXItbG9nby13/aGl0ZS5wbmc" alt="" />
            <div className='bg-white py-4 pb-7 px-4  ' >
                <h2 className='text-3xl font-bold'>Get statred with Uber</h2>
                <Link to={"/login"} className=' flex items-center justify-center w-full mt-4 bg-black text-white px-4 py-2 rounded-md'>Continue</Link>
            </div>
        </div>
        </div>


       


    </div>
  )
}

export default Start