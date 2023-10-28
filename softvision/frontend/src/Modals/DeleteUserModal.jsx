import React, {  useContext, useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/DeleteUserModal.css"
import axiosInstance from "../Utils/Axios.config";
import { alertdeleteSuccess, alertupdateSuccess } from "../alerts";

export default function DeleteUserModal({modaldata,getAllUsers,modalIsOpen,setModalIsOpen}) {
 

  const deleteUser=()=>{
    axiosInstance
    .delete(`/users/${modaldata.id}`)
    .then(res=> {
      getAllUsers();
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
          <button style={{backgroundColor:"red",float:'right'}} type="button" onClick={()=>{deleteUser();setModalIsOpen(false)}}>Delete User</button>  
           <button className="cancel" onClick={()=>setModalIsOpen(false)}>Cancel</button>
          </Modal>
        </>
      );
    }
