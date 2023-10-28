import React, {  useContext, useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/ShowModal.css"
import { UserContext } from "../ContextProviders/UserContextProvider";


export default function ShowModal({modalIsOpen, setModalIsOpen}) {
    const {user} = useContext(UserContext);
    
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        className="Modal"
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
      <div>
      <h2>User Details</h2>
      <p><strong>Username:</strong> {user?.userName}</p>
      <p><strong>First Name:</strong> {user?.firstName}</p>
      <p><strong>Last Name:</strong> {user?.lastName}</p>
      <p><strong>Date of Birth:</strong> {user?.dob}</p>
      <p><strong>Mobile Number:</strong> {user?.mobileNo}</p>
      <p><strong>Email:</strong> {user?.emailId}</p>
    </div>
       <button className="cancel" onClick={()=>setModalIsOpen(false)}>Cancel</button>
      </Modal>
    </>
  );
}