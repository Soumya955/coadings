import React, {  useContext, useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/DeleteUserModal.css"
import { alertdeleteSuccess, alertupdateSuccess } from "../alerts";
import axios from "axios";

export default function DeleteUserModal({modaldata,getData,modalIsOpen,setModalIsOpen}) {
 

  const deleteUser=()=>{
    axios
    .delete(`https://mock-server-1.onrender.com/api/Car/${modaldata._id}`)
    .then(res=> {
      getData();
      alertdeleteSuccess();
    })
    .catch(err => {
      console.error('Error updating data:', err);
    });
  }
    return (
        <>
          <Modal
            isOpen={modalIsOpen}
            className="Modal-delete"
            ariaHideApp={false}
            onRequestClose={() => setModalIsOpen(false)}
          >
          <p>Do you want to delete ?</p>
          <button style={{backgroundColor:"red",float:'right',borderRadius:"20%" ,marginLeft:"1rem"}} type="button" onClick={()=>{deleteUser();setModalIsOpen(false)}}>Delete User</button>  
           <button className="cancel" onClick={()=>setModalIsOpen(false)}>Cancel</button>
          </Modal>
        </>
      );
    }
