import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { alertinvalidloginCredentials, alertloginSuccess, alertsomethingWentWrong, invalidloginCredentials } from '../alerts';

export default function SignIn() {
    const [useremail, setEmail] = useState("");
    const [userpassword, setPassword] = useState("");
  
    const navigate = useNavigate();
    const handleClick = () => {
        console.log(useremail,userpassword)
        if (useremail && userpassword ) {
          const payload = {
            email: useremail,
            password: userpassword,
          };
          return axios
            .post("http://localhost:8080/api/login", payload)
            .then((res) => {
              if(res.data=="Invalid Credentials"){
                alertinvalidloginCredentials()
              }else if(res.data.message=="Login Successfull"){
                alertloginSuccess()
                navigate("/home");
              }else if(res.data=="Something went wrong"){
                alertsomethingWentWrong()
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
        <h2>Sign In</h2>
        <div className='formdiv'>
            <div className="form-group">
                <label >Email</label>
                <input value={useremail} onChange={(e)=>setEmail(e.target.value)}  type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input value={userpassword} onChange={(e)=>setPassword(e.target.value)}  type="password" id="password" name="password" required/>
            </div>
            <div className="form-group">
                <button onClick={()=>handleClick()} type="submit">Sign In</button>
            </div>
        </div>
        <p className="footer">Don't have an account? <Link to={"/"}>Sign up</Link></p>
    </div>
    </>
  )
}
