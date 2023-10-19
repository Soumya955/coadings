import React, { useState } from 'react'
import "./css/SignUp.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { alertemailAlreadyExists, alertsignupSuccess, alertsomethingWentWrong } from '../alerts';

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [useremail, setEmail] = useState("");
    const [userpassword, setPassword] = useState("");
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      console.log(useremail,userpassword,username)
      if (useremail && userpassword &&username) {
        const payload = {
          email: useremail,
          name:username,
          password: userpassword,
        };
        return axios
          .post("http://localhost:8080/api/signup", payload)
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
      }
    };

  return (
    <>
         <div className="container">
        <h2>Sign Up</h2>
        <div className='formDiv'>
            <div className="form-group">
                <label >Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" id="username" name="username" required/>
            </div>
            <div className="form-group">
                <label >Email</label>
                <input value={useremail} onChange={(e)=>setEmail(e.target.value)}  type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input value={userpassword} onChange={(e)=>setPassword(e.target.value)}  type="password" id="password" name="password" required/>
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
