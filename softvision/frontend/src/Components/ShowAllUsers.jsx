import React, { useEffect, useState } from 'react'
import axiosInstance from '../Utils/Axios.config'
import "./css/ShowAllUsers.css"
import { datePipe } from '../Utils/DatePipe';

export default function ShowAllUsers() {
const [users,setusers]=useState([])
const [loading,setloading]=useState(false);

useEffect(()=>{
    getAllUsers();
},[])

const getAllUsers=()=>{
    setloading(true);
   axiosInstance.get('/users')
     .then(res=>{
        setloading(false);
        setusers([...res.data])
    })
     .catch(err=>console.log(err))
}
  return (
    <>
     <div>ShowAllUsers</div>
     {loading&&<h3>...Loading</h3>}
    { users?.map((user)=>
     <div key={user.id} className='user-card'>
      <p><strong>Username:</strong> {user?.userName}</p>
      <p><strong>First Name:</strong> {user?.firstName}</p>
      <p><strong>Last Name:</strong> {user?.lastName}</p>
      <p><strong>Date of Birth:</strong> {datePipe(user?.dob)}</p>
      <p><strong>Mobile Number:</strong> {user?.mobileNo}</p>
      <p><strong>Email:</strong> {user?.emailId}</p>
    </div>
     )}
    </>
    
  )
}
