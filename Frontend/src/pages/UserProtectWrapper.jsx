import React from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../context/usercontext'
import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem("token");

    const navigate = useNavigate();
    const {user , setUser} = useContext(UserDataContext);


    useEffect(() => {
        if(!token){
            navigate("/login");
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            if(res.status === 200){
                setUser(res.data.user);
            }
        }).catch((err) => {
            console.log(err);
            localStorage.removeItem("token");
            navigate("/login");
        })
    }, [token]);



  return (
    <div>{children}</div>
  )
}

export default UserProtectWrapper