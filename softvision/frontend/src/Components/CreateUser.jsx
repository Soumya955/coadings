import axios from 'axios';
import React, { useState } from 'react'
import axiosInstance from '../Utils/Axios.config';
import "./css/CreateUser.css"
import { alertCreateUserSuccess, alertErrorcreateUser } from '../alerts';
import { Link } from 'react-router-dom';

export default function CreateUser() {
    
  const [loading,setloading]=useState(false)
    const [user, setUser] = useState({
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        dob: '',
        mobileNo: '',
        emailId: '',
      });
    
      const createUser = async () => {
        setloading(true)
        console.log(user)
        try {
          await axiosInstance.post('/users', user);
           alertCreateUserSuccess()
           setloading(false)
        } catch (error) {
          alertErrorcreateUser(error)
        }
      }
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      }
    
      return (
        <div className="create-user-form">
          <h2>Create User</h2>
          {loading?<h3>...Loading</h3>:<form>
            <div className="form-group">
              <label htmlFor="userName">User Name</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={user.userName}
                onChange={handleInputChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
              />
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
              />
              <label htmlFor="lastName">LastName</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
              />
              <label htmlFor="dob">DOB</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={user.dob}
                onChange={handleInputChange}
              />
              <label htmlFor="mobileNo">MobileNo</label>
              <input
                type="number"
                id="mobileNo"
                name="mobileNo"
                value={user.mobileNo}
                onChange={handleInputChange}
              />
              <label htmlFor="emailId">EmailId</label>
              <input
                type="text"
                id="emailId"
                name="emailId"
                value={user.emailId}
                onChange={handleInputChange}
              />
              
            </div>
    
            {/* Repeat the pattern for other form fields (password, firstName, lastName, etc.) */}
    
            <button type="button" onClick={createUser}>Create User</button>
               <h3>Have You Logged in <Link to={"login"}>Login</Link></h3>  
          </form>}

        </div>
      );
    }