import React, { useState } from 'react'
import "./Pages-css/SignIn.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';
import { saveData } from '../Utils/appLocalStorage';

export default function SignIn() {

    const [useremail, setEmail] = useState("");
    const [userpassword, setPassword] = useState("");
    const [isAuthLoading,setisAuthLoading]=useState(false);
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      if (useremail && userpassword) { 
        const payload = {
          email: useremail,
          password: userpassword,
        };
        return axios
          .post("https://maroon-jackrabbit-suit.cyclic.app/api/login", payload)
            .then((res) => {
                console.log(res)
                if(res.data.token){
                 
                   saveData("user",res.data.user)
                   setisAuthLoading(true);
            setTimeout(()=>{
            setisAuthLoading(false)
            navigate("/home")
            Swal.fire({
              title: 'Success!',
              text: 'You have logged in successfully.',
              icon: 'success',
              confirmButtonText: 'OK',
            });
            },2000)   
           }
            })
            .catch((err) => alert("Invalid Credentials"))
      }
    };
  return (
    <>

      {isAuthLoading?
      <div className="loading-container">
      <ReactLoading type={'bubbles'} color={'green'} height={'10px'} width={'30px'}  />
      <span style={{fontSize:"1.1rem",fontWeight:"bold",marginTop:"10px"}}>Authenticating</span>
      </div>:<div id='form'>
   <label>Email</label>
    <input type="email" id="email" value={useremail} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email address"/>
  
    <label >Password</label>
    <input type="password" id="password" value={userpassword} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
  
    <input type="submit" onClick={handleClick} value="Submit"/>
    <div>Don't have an account ? <Link to={"/signup"}>Sign Up</Link></div>
    </div>
      } 
    </>
  )
}





