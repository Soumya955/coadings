import React, { useState } from 'react'
import "./css/SignUp.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { alertemailAlreadyExists, alertsignupSuccess, alertsomethingWentWrong } from '../alerts';

 export default function SignUp() {
    const [userdata,setuserdata]=useState({name:"",email:"",password:"",phone:"",address:""});
  
    const navigate = useNavigate();

    const handleUserData=(e)=>{
      const {name,value}=e.target;
      setuserdata(userdata=>{return{...userdata,[name]:value}})
    }
  
    const handleClick = () => {
      //console.log(userdata)
        const payload = {
          email:userdata.email,
          name:userdata.name,
          password:userdata.password,
          phone:userdata.phone,
          address:userdata.address,
        };
        return axios
          .post("https://mock-server-1.onrender.com/api/signup", payload)
          .then((res) => {
            if(res.data=="Email is already Exists"){
              alertemailAlreadyExists()
            }else if(res.data=="Signup is successfull"){
              alertsignupSuccess();
              navigate("/signin");
            }else if(res.data=="Something went wrong"){
              alertsomethingWentWrong();
            }
          })
          .catch((err) => {
            console.log(err)
          });
      
    };

  return (
    <>
         <div className="container">
        <h2>Sign Up</h2>
        <div className='formDiv'>
            <div className="form-group">
                <label >Email</label>
                <input value={userdata.email} onChange={(e)=>handleUserData(e)}  type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input value={userdata.password}  onChange={(e)=>handleUserData(e)}  type="password" id="password" name="password" required/>
            </div>
            <div className="form-group">
                <label >Name</label>
                <input value={userdata.name}  onChange={(e)=>handleUserData(e)}  type="text" id="name" name="name" required/>
            </div>
            <div className="form-group">
                <label >Phone</label>
                <input value={userdata.phone}  onChange={(e)=>handleUserData(e)}    type="text" id="phone" name="phone" required/>
            </div>
            <div className="form-group">
                <label >Address</label>
                <textarea name="address" value={userdata.address}  onChange={(e)=>handleUserData(e)}   type="text"  cols="40" rows="4"></textarea>
            </div>
            <div className="form-group">
                <button onClick={()=>handleClick()} type="submit">Sign Up</button>
            </div>
        </div>
        <p className="footer">Already have an account? <Link to={"/signin"}>Sign in</Link></p>
    </div>
    </>
  )
}
