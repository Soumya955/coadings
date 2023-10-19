import React, { useState } from 'react'
import "./Register.css"
import axios from "axios";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase';

export default function Register() {
    const [useremail, setEmail] = useState("");
    const [userpassword, setPassword] = useState("");
    const [submitbuttonLoading,setsubmitbuttonloading]=useState(false);
    const [isloading,setisloading]=useState(false);
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      setsubmitbuttonloading(true);
      setisloading(true);
      if (useremail && userpassword ) {
      createUserWithEmailAndPassword(auth,useremail,userpassword)
      .then(res=>{console.log(res)
        setTimeout(() => {
          setisloading(false);
          setsubmitbuttonloading(false)
          //updateProfile(res.user,{displayName:username})
          navigate("/login")
        }, 1000);
      })
      .catch(err=>{console.log(err)
        setisloading(false);
        setsubmitbuttonloading(false)
        alert(`Goto Login ....${err}`)
      }) 
      }
    };
  return (
    <>
      <div>Register</div>
      {isloading&&<h1>...Loading</h1>}
    <div id='form'>
      <label>Email</label>
    <input type="email" id="email" value={useremail} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email address"/>

  
    <label >Password</label>
    <input type="password" id="password" value={userpassword} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
  
    <input type="submit" disabled={submitbuttonLoading} onClick={handleClick} value="Submit"/>
     
     <h3>Already have an account ?<Link to={"/login"}>login</Link></h3>
    </div>
    
     
    </>
  )
}
