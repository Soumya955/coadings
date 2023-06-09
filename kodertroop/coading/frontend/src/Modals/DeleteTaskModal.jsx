import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/DeleteTaskModal.css"
import axios from "axios";
import Swal from 'sweetalert2'

export default function DeleteTaskModal({modalIsOpen,sendsingleitem, setModalIsOpen,handleGetData}) {




   const handleClick=()=>{
    
      axios.delete(`https://busy-coveralls-duck.cyclic.app/api/tasks/${sendsingleitem._id}`)
      .then(response => {
        Swal.fire({
            title: 'Deleted!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        handleGetData()
      })
      .catch(error => {
        console.log(error);
      });

    
   }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        className="Modal1"
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
      <h3>Are You Sure ?</h3>
       
        <button className="add" onClick={() => {
            setModalIsOpen(false);
            handleClick();
          }}> Delete </button>
          <button className="cancel" onClick={()=>setModalIsOpen(false)}>Cancel</button>
      </Modal>
      
    </>
  );
}
