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
          .post("https://maroon-jackrabbit-suit.cyclic.app/api/signup", payload)
          .then((res) => {
            setisAuthLoading(true);
            setTimeout(()=>{
            setisAuthLoading(false)
            navigate("/");
            },2000)
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
