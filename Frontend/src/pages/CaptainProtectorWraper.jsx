import React from 'react'
import { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const CaptainProtectorWrapper = ({children}) => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const {captain , setCaptain} = useContext(CaptainDataContext);
    const [isloading , setIsloading] = useState(true);


    useEffect(() => {
        if(!token){
            navigate("/Captainlogin");
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captians/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if(res.status === 200){
                setCaptain(res.data.captain);
                setIsloading(false);
            }
        }).catch((err) => {
            console.log(err);
            localStorage.removeItem("token");
            navigate("/Captainlogin");
        })

    }, [token] );

    

   

    if(isloading){
        return <div>Loading...</div>
    }






  return (
    <div>{children}</div>
  )
}

export default CaptainProtectorWrapper