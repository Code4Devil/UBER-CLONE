import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Captainsignup = () => {

    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState(0);
    const [vehicleType, setVehicleType] = useState("");
    

    const {captain, setCaptain} = React.useContext(CaptainDataContext);




    
    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(firstname, lastname, email, password);
        
        const captainData = ({
            fullname: {
                firstname:firstname,
                lastname:lastname,
            },
            email:email,
            password:password,
            vehicle: {
                color:vehicleColor,
                plate:vehiclePlate,
                capacity:vehicleCapacity,
                vehicleType:vehicleType
            }
        })

        console.log(captainData);
        

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captians/register`, captainData);

        if(response.status === 200){
            const data = response.data;
            console.log(data);
            setCaptain(data);
            localStorage.setItem("token", data.token);
            navigate("/captainhome");

            console.log(e.target.value)

        }

        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setVehicleColor("");
        setVehiclePlate("");
        setVehicleCapacity(0);
        setVehicleType("");
    }

  return (
     <div className='flex justify-center items-center h-screen w-screen rounded-md overflow-hidden'>
        <div className='p-7 h-[667px] w-[375px] border-2 border-black rounded-xl'>

            <div className='flex flex-col justify-between h-full ' >
               <div>
            <img className=' w-20 mb-2 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

                <form onSubmit={submitHandler} >

                    <h3 className='text-base font-semibold '>What's our
                       Captain's name?</h3>
                    <div className='flex gap-5 mb-2'>
                        <input required value={firstname} onChange={(e) => setFirstname(e.target.value)} className='bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-sm'  type="text" placeholder='First Name' />
                        <input value={lastname} onChange={(e) => setLastname(e.target.value)} className='bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-sm' required  type="text" placeholder='Last Name' />
                    </div>


                    <h3 className='text-base font-semibold '>What's our Captain's Email?</h3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' required  type="text" placeholder='email@example.com' />
                    <h3 className='text-base font-semibold '>Enter password</h3>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-sm' required type="password" placeholder='password' />



                    <h3 className='text-base font-semibold '>Vehicle Details</h3>
                    <div className='flex gap-5 mb-2'>
                        <input value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} required className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm' type="text" placeholder='Vehicle Color' />
                        <input value={vehiclePlate} onChange={(e) => setVehiclePlate(e.target.value)} required className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-sm' type="text" placeholder='License Plate' />
                    </div>

                    <div className='flex gap-5 mb-5'>
                        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-sm'>
                            <option value="">Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="motorcycle">Motorcycle</option> 
                            <option value="auto">Auto</option>
                        </select>

                        <input 
                            type="number" 
                            required 
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-sm'
                            placeholder='Vehicle Capacity'
                            min={1}
                            max={99}
                            value={vehicleCapacity}
                            onChange={(e) => setVehicleCapacity(Number(e.target.value))}

                        />


                    </div>


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