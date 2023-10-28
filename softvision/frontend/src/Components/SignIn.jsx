import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { alertinvalidloginCredentials, alertloginSuccess, alertsomethingWentWrong, invalidloginCredentials } from '../alerts';
import { UserContext } from '../ContextProviders/UserContextProvider';
import axiosInstance from '../Utils/Axios.config';
import "./css/SignIn.css"

export default function SignIn() {
    const [loading,setloading]=useState(false)
    const [useremail, setEmail] = useState("S.badajena@example.com");
    const [userpassword, setPassword] = useState("soumya123");
    const {loginUser} = useContext(UserContext);

  
    const navigate = useNavigate();
    const handleClick = async() => {
      setloading(true);
        if (useremail && userpassword ) {
            try {
              const response = await axiosInstance.get(`/users?emailId=${useremail}&password=${userpassword}`);
              if (response.data.length > 0) {
                loginUser(response.data[0])
                alertloginSuccess();
                setloading(false)
                navigate("/showuser")
              } else {
                alertinvalidloginCredentials()
              }
            } catch (error) {
              
            }
        }
      };
  return (
    <>
        <div className="container">
        <h2>Sign In</h2>
        {loading?<h3>...loading</h3>:<div className='formdiv'>
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
        </div>}
    </div>
    </>
  )
}
