import React, { useState } from 'react'
import "./Register.css"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [useremail, setEmail] = useState("");
    const [userpassword, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      if (useremail && userpassword &&username) {
        const payload = {
          email: useremail,
          name:username,
          password: userpassword,
          bookings:[]
        };
        return axios
          .post("https://vivacious-khakis-lamb.cyclic.app/api/signup", payload)
          .then((res) => {
            navigate("/login");
          })
          .catch((err) => {
            console.log(err)
          });
      }
    };
  return (
    <>
      <div>Sign Up</div>
    <div id='form'>
    <label>Username</label>
    <input type="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your name"/>
    <label>Email</label>
    <input type="email" id="email" value={useremail} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email address"/>
  
    <label >Password</label>
    <input type="password" id="password" value={userpassword} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
  
    <input type="submit" onClick={handleClick} value="Submit"/>  

    <div>Already have an account ? <Link to={"/login"}>Sign In</Link></div>
    </div>
    
     
    </>
  )
}
