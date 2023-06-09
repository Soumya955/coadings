import React, { useState } from 'react'
import "./Pages-css/SignUp.css"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';


export default function SignUp() {
    const [username, setUsername] = useState("");
    const [useremail, setEmail] = useState("");
    const [userpassword, setPassword] = useState("");
    const [isAuthLoading,setisAuthLoading]=useState(false);
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      if (useremail && userpassword &&username) {
        const payload = {
          email: useremail,
          name:username,
          password: userpassword,
        };
        return axios
          .post("http://localhost:8080/api/signup", payload)
          .then((res) => {
            setisAuthLoading(true);
            if(res.data.msg=="Email is already exists"){
              setTimeout(()=>{
                setisAuthLoading(false)
                Swal.fire({
                  title: 'Warning!',
                  text: 'Email is already exists.',
                  icon: 'warning',
                  confirmButtonText: 'OK',
                });
                },2000)
            }else if(res.data.msg=="Something went wrong"){
              setTimeout(()=>{
                setisAuthLoading(false)
                Swal.fire({
                  title: 'Warning!',
                  text: 'Something went wrong.',
                  icon: 'warning',
                  confirmButtonText: 'OK',
                });
                },2000)
              
            }else{
              setTimeout(()=>{
                setisAuthLoading(false)
                navigate("/");
                },2000)
            }
          })
          .catch((err) => {
            console.log(err)
          });
      }
    };
  return (
    <>
     {isAuthLoading&& 
      <div className="loading-container">
      <ReactLoading type={'bubbles'} color={'green'} height={'10px'} width={'30px'}  />
      <span style={{fontSize:"1.1rem",fontWeight:"bold",marginTop:"10px"}}>Please Wait</span>
      </div>
      }

    <div id='form'>
    <label>Username</label>
    <input type="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Enter your name" required/>
    <label>Email</label>
    <input type="email" id="email" value={useremail} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email address" required/>
  
    <label >Password</label>
    <input type="password" id="password" value={userpassword} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" required/>
  
    <input type="submit" onClick={handleClick} value="Submit"/>  

    <div>Already have an account ? <Link to={"/"}>Sign In</Link></div>
    </div>
    
     
    </>
  )
}
