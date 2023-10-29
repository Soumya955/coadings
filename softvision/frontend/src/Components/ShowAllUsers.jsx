import React, { useEffect, useState } from 'react'
import axiosInstance from '../Utils/Axios.config'
import "./css/ShowAllUsers.css"
import { datePipe } from '../Utils/DatePipe';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { userGETFailure, userGETRequest, userGETSuccess } from '../Redux/UsersReducer/Action';


function ShowAllUsers() {

const dispatch = useDispatch();
const { users, isLoading, isError } = useSelector((state) => {
  return {
    users: state.UserReducer.data,
    isLoading: state.UserReducer.isLoading,
    isError: state.UserReducer.isError,
  };
}, shallowEqual);

useEffect(()=>{
    getAllUsers();
},[])

const getAllUsers=()=>{
  dispatch(userGETRequest());
 axiosInstance.get('/users')
   .then(res=>{
    dispatch(userGETSuccess([...res.data]))
   })
   .catch(err=>{
    dispatch(userGETFailure())
    console.log(err)
  })
}

  return (
    <>
     <div>ShowAllUsers</div>
     {isLoading&&<h3>...Loading</h3>}
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

export {ShowAllUsers}