import React, { useState } from 'react'
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';import ReactLoading from 'react-loading';
import { saveData } from '../Utils/appLocalStorage';


export default function Login() {

    const [useremail, setEmail] = useState("");
    const [userpassword, setPassword] = useState("");
    const [isAuthLoading,setisAuthLoading]=useState(false)
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      if (useremail && userpassword) {
        setisAuthLoading(true)
              fetch("https://vivacious-khakis-lamb.cyclic.app/api/login",{
                method : "POST",
                headers: {
                    'Content-Type': 'application/json',
                  },
                body : JSON.stringify({email:useremail,password:userpassword})
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                if(res.message=="Login Successfull"){
                  Swal.fire({
                    title: 'Success!',
                    text: 'You have logged in successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                  });
                  saveData("user",res.user)
                      navigate("/home")
                }
            })
            .catch((err) => alert("Invalid Credentials"))
            setisAuthLoading(false)
      }
    };
  return (
    <>
      <div>Sign In</div>
      {isAuthLoading&& 
      <div className="loading-container">
      <ReactLoading type={'bubbles'} color={'green'} height={'10px'} width={'30px'}  />
      <span style={{fontSize:"1.1rem",fontWeight:"bold",marginTop:"10px"}}>Authenticating</span>
      </div>
      }
   
        
    <div id='form'>
   <label>Email</label>
    <input type="email" id="email" value={useremail} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email address"/>
  
    <label >Password</label>
    <input type="password" id="password" value={userpassword} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
  
    <input type="submit" onClick={handleClick} value="Submit"/>
    <div>Don't have an account ? <Link to={"/"}>Sign Up</Link></div>
    </div>
     
    </>
  )
}





