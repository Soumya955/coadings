import React, {  useContext, useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/UpdateModal.css"
import { Link } from "react-router-dom";
import axiosInstance from "../Utils/Axios.config";
import { alertupdateSuccess } from "../alerts";

export default function UpdateModal({modaldata,getAllUsers,modalIsOpen,setModalIsOpen}) {

  const [user, setUser] = useState({
    userName: "",
    password: "",
    firstName:"",
    lastName:"",
    dob: "",
    mobileNo:"",
    emailId: "",
  });

  const updateUser=()=>{
    const updatedData = {
    userName: user.userName||modaldata.userName,
    password: user.password||modaldata.password,
    firstName:user.firstName||modaldata.firstName,
    lastName:user.lastName||modaldata.lastName,
    dob: user.dob||modaldata.dob,
    mobileNo:user.mobileNo||modaldata.mobileNo,
    emailId: user.emailId||modaldata.emailId,
    };
    axiosInstance
    .patch(`/users/${modaldata.id}`, updatedData)
    .then(res=> {
      getAllUsers();
      alertupdateSuccess();
    })
    .catch(err => {
      console.error('Error updating data:', err);
    });
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }
    return (
        <>
          <Modal
            isOpen={modalIsOpen}
            className="Modal-update"
            ariaHideApp={false}
            onRequestClose={() => setModalIsOpen(false)}
          >
          <form>
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
          </form>
          <button type="button" onClick={()=>{updateUser();setModalIsOpen(false)}}>Update User</button>  
           <button className="cancel" onClick={()=>setModalIsOpen(false)}>Cancel</button>
          </Modal>
        </>
      );
    }
